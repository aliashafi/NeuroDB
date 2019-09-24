const Validator = require("validator");
const validText = require("./valid-text");
const validateElectrodeData = require('./electrode');

module.exports = function validateImagingData(data) {
    let errors = {};

    if (!data.patientId) {
        errors.patientId = "Patient ID is required";
    }   
    if (data.patientId instanceof mongoose.Schema.Types.ObjectId) {
        errors.invalidPatientId = "Patient ID provided is invalid";
    }

    // Validate electrode montage input - if invalid, merge electrode montage errors with imaging errors 
    if (data.electrodeMontage.length) {
        const electrodeValidation = validateElectrodeData(data.electrodeMontage);
        if (!electrodeValidation.isValid) {
            errors.Object.assign({}, errors, electrodeValidation.errors);
    }
}

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};