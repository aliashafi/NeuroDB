const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");


const router = express.Router();


router.get("/test", (request, response) => response.json({msg: "This is the users route"}));

router.get("/current", passport.authenticate("jwt", {session: false}), (request, response) => {
    response.json({
        id: request.user.id,
        handle: request.user.handle,
        email: request.user.email
    })
})

// users controller/errors

// creating a route "/register" to make POST request for creating a user
router.post("/register", (request, response) => {
    // request = object containing info about the HTTP request that raised event
    // response = info for sending back desired HTTP response


    // importing user model validations
    const {errors, isValid} = validateRegisterInput(request.body);

    if (!isValid) {
        return response.status(400).json(errors);
    }
    
    // grabbing/finding email
    User.findOne({ email: request.body.email })
        .then( user => {
            if (user) {
                // if you find a user w/ this email, return 400 error
                return response.status(400).json({email: "Email already taken"})
            } else {
                const newUser = new User({
                    handle: request.body.handle,
                    email: request.body.email,
                    password: request.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then( user => {
                                const payload = { id: user.id, name: user.name};

                                jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600 }, (err, token) => {
                                    response.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                });
                            })
                            .catch( err => console.log(err));
                            
                    });
                });
            }
        });
});


// sessions controller
// creating a route "/login" to make POST requrest to create a session
router.post("/login", (request, response) => {

    // importing session validations/errors
    const {errors, isValid} = validateLoginInput(request.body);

    if (!isValid) {
        return response.status(400).json(errors)
    }

    const email = request.body.email
    const password = request.body.password

    // find fives us array
    // findOne gives us 1 object
    User.findOne({ email })
        // checking if email exists
        .then( user => {
            // entering email gives us back a user
            if (!user) {
                return response.status(400).json({email: "User does not exist"})
            }

            // checking if password matches user password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email
                        };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                            response.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        });
                    } else {
                        return response.status(400).json({password: "Wrong password"});
                    }
                })
        })

})






module.exports = router;