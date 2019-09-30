const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicationSchema = new Schema({
    medicationName: {
        type: String,
    },
    medicationPurpose: {
        type: String,
    }
});

module.exports = Medication = mongoose.model('Medication', MedicationSchema);