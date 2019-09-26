const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const crypto = require("crypto");
const nodemailer = require("nodemailer");

const keys = require("../../config/keys");

const validateRegisterInput = require("../../validations/register");
const validateLoginInput = require("../../validations/login");


const User = require("../../models/User");
const Token = require("../../models/Token");



router.get("/current", passport.authenticate("jwt", { session: false }), (request, response) => {

    response.json({
        id: request.user.id,
        firstName: request.user.firstName,
        lastName: request.user.lastName,
        email: request.user.email,
        affiliation: request.user.affiliation,
    })
})

// email confirmation
router.get("/confirmation/:token", (request, response) => {
    Token.findOne({ token: request.params.token })
        .then( token => {
            User.findById(token._userId)
                .then( user => {
                    if (user.isVerified) {
                        // console.log("User has already been verified")
                        response.status(404).json({alreadyVerified: "Account has already been verified"})
                    } else {
                        user.isVerified = true;
                        user.save()
                    }
                })
                .catch( error => {
                    response.status(400).json({noUserFound: "Unable to find a valid user for this token"})
                })
        })
        .catch( error => {
            response.status(400).json({noTokenFound: "Unable to find valid token"})
        })
})

// resend email confirmation
router.get("/resend", (request, response) => {

})

// register user
router.post("/register", (request, response) => {

    const { errors, isValid } = validateRegisterInput(request.body);

    if (!isValid) return response.status(400).json(errors);


    User.findOne({ email: request.body.email })
        .then( user => {
            if (user) {
                errors.email = "Email already exists"
                return response.status(400).json(errors)

            } else {
                const newUser = new User({
                    firstName: request.body.firstName,
                    lastName: request.body.lastName,
                    email: request.body.email,
                    password: request.body.password,
                    affiliation: request.body.affiliation,
                })

                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if (error) throw error;
                        newUser.password = hash;
                        newUser.save()
                            .then( user => {

                                const token = new Token({
                                    _userId: user._id,
                                    token: crypto.randomBytes(16).toString("hex")
                                })
                                // add token to admin pendingUsers
                                token.save()
                                    // token gets saved to mongoDB
                                    .then( token => {
                                        const transporter = nodemailer.createTransport({
                                            service: "gmail",
                                            auth: { 
                                                user: "neurodb.io@gmail.com",
                                                pass: "go_neuro_go"
                                            }
                                        })
                                        const mailOptions = {
                                            from: "neurodb.io@gmail.com",
                                            // admin.email
                                            to: user.email,
                                            subject: "NeuroDB Account Verification",
                                            text: "http://localhost:3000/confirmation/" + token.token
                                        }
                                        transporter.sendMail(mailOptions, function(error, data) {
                                            if (error) {
                                                console.log("Unable to send email" + error)
                                            } else {
                                                console.log("Email successfully sent")
                                            }
                                        })
                                            // .then( response => {msg: "Verification email was sent"})
                                            // .catch( error => response.status(500).json({msg: "Email was not sent"}))
                                    })


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

// login user
router.post("/login", (request, response) => {

    const { errors, isValid } = validateLoginInput(request.body);

    if (!isValid) return response.status(400).json(errors);


    const email = request.body.email;
    const password = request.body.password;


    User.findOne({ email: email })
        .then( user => {
            if (!user){
                errors.email = "User not found";
                return response.status(404).json(errors);
            } else if (!user.isVerified) {
                return response.status(400).json({msg: "Your account has not been verified"})
            }

            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id
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

// user index
router.get("/", (request, response) => {
    User.find()
        .then( users => (
            response.json(users)
        ))
        .catch( error => (
            response.status(404).json({ noUsersFound: "No users found"})
        ))
})

// user show
router.get("/:userId", (request, response) => {
    User.findById(request.params.userId)
        .then( user => {
            response.json(user)
        })
        .catch( error => {
            response.status(404).json({ noUserFound: "No user found with given ID" })
        });
})

// user update
router.patch("/:userId", (request, response) => {
    User.findByIdAndUpdate(request.params.userId, { $set: request.body }, {new: true})
        .then ( user => {
            response.json(user)
        })
        .catch( error => {
            response.status(404).json({ noUserFound: "No user found with given ID"})
        })

})

// user delete
router.delete("/:userId", (request, response) => {
    User.findByIdAndRemove(request.params.userId)
        .then( user => {
            // can pass found user to callback if needed 
            response.json({ msg: `${user.email} deleted successfully`})
        })
        .catch( error => {
            response.status(404).json({ noUserFound: "No user found with given ID" })
        })
})




module.exports = router;