const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : "";
    data.lastName = validText(data.lastName) ? data.lastName : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";
    data.affiliation = validText(data.affiliation) ? data.affiliation : "";

    // data.privileges = validText(data.privileges) ? data.privileges : "";

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name field is required";
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name field is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Not a valid email address";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30})) {
        errors.pasword = "Password must be between 6 and 30 characters"
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password = "Passwords must match"
    }

    if (Validator.isEmpty(data.affiliation)) {
        errors.affiliation = "Affiliation field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}