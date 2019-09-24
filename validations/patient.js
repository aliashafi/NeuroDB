const Validator = require("validator");
const validText = require("./valid-text");
const validateDemographicInput = require('./demographics');
const validateMedicationInput = require('./medication');
const validateMedicalHistoryInput = require('./medical_history');
const validateImagingData = require('./imaging');

module.exports = function validatePatientInput(data) {
    let errors = {};

    data.researchId = validText(data.researchId) ? data.researchId : "";

    if (Validator.isEmpty(data.researchId)) {
        errors.researchId = "Patient ECID field is required";
    }

    if (!data.dateOfSurgery instanceof Date) {
        errors.dateOfSurgery = "Date of surgery must be in date format";
    }

    if (typeof data.consent === 'boolean') {
        errors.consent = "Consent field must be true or false";
    }

    // Validate demographics input - if invalid, merge demographics errors with patients errors 
    const demographicsValidation = validateDemographicInput(data.demographics);
    if (!demographicsValidation.isValid) {
        errors = Object.assign({}, errors, demographicsValidation.errors);
    }

    // Validate medication input - if invalid, merge medication errors with patients errors 
    const medicationValidation = validateMedicationInput(data.medication);
    if (!medicationValidation.isValid) {
        errors.Object.assign({}, errors, medicationValidation.errors);
    }

    // Validate medical history input - if invalid, merge medical history errors with patients errors 
    const medicalHistoryValidation = validateMedicalHistoryInput(data.medicalHistory);
    if (!medicationValidation.isValid) {
        errors.Object.assign({}, errors, medicalHistoryValidation.errors);
    }

    // Validate medical history input - if invalid, merge medical history errors with patients errors 
    const imagingValidation = validateImagingData(data.imaging);
    if (!imagingValidation.isValid) {
        errors.Object.assign({}, errors, imagingValidation.errors);
    }

    if (!data.tasks instanceof Array) {
        errors.tasks = "Tasks must be an array of task objectIds";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
