const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTaskInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name: '';
    data.dateTime= validText(data.dateTime) ? data.dateTime: '';
    data.researchers= validText(data.researchers) ? data.researchers: '';
    data.notes= validText(data.notes) ? data.notes: '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Task name cannot be empty'
    }

    if (Validator.isEmpty(data.dateTime)) {
        errors.dateTime = 'Task date & time cannot be empty'
    }

    if (Validator.isEmpty(data.researchers)) {
        errors.researchers = 'Task researchers cannot be empty'
    }

    if (Validator.isEmpty(data.notes)) {
        errors.notes = 'Task notes cannot be empty'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}