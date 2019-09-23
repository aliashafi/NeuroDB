const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateMedicalHistoryInput(data) {
    let errors = {};
    const epilepsyDiagnosis = ['MTL', 'Other'];

    if (data.BDI && !Validator.isInt(data.BDI)) {
        errors.BDI = "BDI must be an integer";
    }

    if (data.BAI && !Validator.isInt(data.BAI)) {
        errors.BAI = "BAI must be an integer";
    }

    if (data.epilepsyDiagnosis && !Validator.isIn(data.epilepsyDiagnosis, epilepsyDiagnosis)) {
        errors.epilepsyDiagnosis = "Invalid input - Valid input for epilepsy diagnosis: MTL, Other";
    }

    if (data.previousResection && !typeof data.previousResection === 'boolean') {
        errors.previousResection = "Previous resection field must be true or false";
    }

    if (data.neuroPace && !typeof data.neuroPace === 'boolean') {
        errors.neuroPace = "Neuro Pace field must be true or false";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}