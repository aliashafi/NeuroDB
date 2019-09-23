const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicalHistorySchema = new Schema({
    BDI: {
        type: Number,
        required: true
    },
    BAI: {
        type: Number,
        required: true
    },
    epilepsyDiagnosis: {
        type: String,
        required: true //[includes: MTL, ...]
    },
    previousResection: {
        type: Boolean,
        required: true
    },
    neuroPace: {
        type: Boolean,
        required: true
    }
});

module.exports = MedicalHistory = mongoose.model("medical_histories", MedicalHistorySchema);