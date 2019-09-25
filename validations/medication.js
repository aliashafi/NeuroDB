const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateMedicationInput(data) {
    let errors = {};
    const purpose = ['epilepsy', 'depression', 'anxiety', 'pain'];
    if (data.medicationName && typeof data.medicationName !== 'string') {
        errors.medicationName = "Medication name must be in type string";
    }

    if (data.medicationPurpose && !Validator.isIn(data.medicationPurpose, purpose)) {
        errors.medicationPurpose = "Invalid input - Valid values for medication purpose: epilepsy, depression, anxiety, pain";
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

}