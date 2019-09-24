const Validator = require("validator");
const validText = require("./valid-text");

modeule.exports = function validateDemographicInput(data) {
    let errors = {};
    const leftRightDominance = ["L", "R"];
    const languages = ["English", "Madarin", "Spanish"];
    const gender = ["M", "F"];

    if (data.birthDate && !data.birthDate instanceof Date) {
        errors.birthDate = "Birth date needs to be in date format";
    }

    if (data.age && !Validator.isInt(data.age)) {
        errors.age = "Age must be an integer value"; 
    }

    if (data.gender && !Validator.isIn(data.gender, gender)) {
        errors.gender = "Invalid input - Valid values for gender: M, F";
    }

    if(data.languageDominance && !Validator.isIn(data.languageDominance, leftRightDominance)) {
        errors.languageDominance = "Invalid input - Valid values for language dominance: L, R";
    }

    if (data.dominantHand && !Validator.isIn(data.dominantHand, leftRightDominance)) {
        errors.dominantHand = "Invalid input - Valid values for dominantHand: L, R";
    }

    if (data.nativeLanguage && !Validator.isIn(data.nativeLanguage, languages)) {
        errors.nativeLanguage = "Invalid input - Valid values for native language: English, Mandarin, Spanish";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
};