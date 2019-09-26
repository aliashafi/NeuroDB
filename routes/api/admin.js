const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const keys = require("../../config/keys");
const validateLoginInput = require("../../validations/login");

const Admin = require("../../models/Admin");


router.get("/current", passport.authenticate("jwt", { session: false }), (request, response) => {

    response.json({
        id: request.admin.id,
        firstName: request.admin.firstName,
        lastName: request.admin.lastName,
        email: request.admin.email,
        affiliation: request.admin.affiliation,
        pendingUserTokens: request.admin.pendingUserTokens
    })
})

router.post("/login", (request, response) => {

    const { errors, isValid } = validateLoginInput(request.body);

    if (!isValid) return response.status(400).json(errors);


    const email = request.body.email;
    const password = request.body.password;


    Admin.findOne({ email: email })
        .then(admin => {
            if (!admin) {
                errors.email = "Admin not found";
                return response.status(404).json(errors);
            } else if (!admin.isVerified) {
                return response.status(400).json({ msg: "Your account has not been verified" })
            }

            bcrypt.compare(password, admin.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: admin.id
                        };

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
                    } else {
                        return response.status(400).json({ password: "Incorrect Password" });
                    }
                })
        })
})

router.get("/:adminId", (request, response) => {
    Admin.findById(request.params.adminId)
        .then(admin => {
            response.json(admin)
        })
        .catch(error => {
            response.status(404).json({ noUserFound: "No admin found with given ID" })
        });
})