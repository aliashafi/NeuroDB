const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");

const User = require("../../models/User");



router.get("/current", passport.authenticate("jwt", { session: false }), (request, response) => {
    // debugger

    // response.json({msg: "Hello"})
    response.json({
        id: request.user.id,
        firstName: request.user.firstName,
        lastName: request.user.lastName,
        email: request.user.email,
        affiliation: request.user.affiliation,
        privileges: request.user.privileges
    })
})



router.post("/register", (request, response) => {
    User.findOne({ email: request.body.email })
        .then( user => {
            if (user) {
                return response.status(400).json({ email: "A user has already been registered with this email"})
            } else {
                const newUser = new User({
                    firstName: request.body.firstName,
                    lastName: request.body.lastName,
                    email: request.body.email,
                    password: request.body.password,
                    affiliation: request.body.affiliation,
                    privileges: request.body.privileges,
                })

                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if (error) throw error;
                        newUser.password = hash;
                        newUser.save()
                            .then( user => {
                                const payload = {
                                    id: user.id,
                                    email: user.email,
                                    privileges: user.privileges
                                }

                                jwt.sign(
                                    payload, 
                                    keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (error, token) => {
                                        response.json({
                                            success: true,
                                            token: "Bearer " + token
                                        });
                                    });
                            })
                            .catch( error => console.log(error));
                    });
                });
            }
        });
});

router.post("/login", (request, response) => {
    const email = request.body.email;
    const password = request.body.password;


    User.findOne({ email: email })
        .then( user => {
            if (!user) {
                return response.status(404).json({ email: "This email is not registered"});
            }

            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            email: user.email,
                            privileges: user.privileges
                        };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600},
                            (error, token) => {
                                response.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                    } else {
                        return response.status(400).json({ password: "Incorrect Password"});
                    }
                })
        })
})




module.exports = router;