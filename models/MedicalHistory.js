const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicalHistorySchema = new Schema({
    BDI: {
        type: Number
    },
    BAI: {
        type: Number
    },
    epilepsyDiagnosis: {
        type: String //[includes: MTL, ...]
    },
    previousResection: {
        type: Boolean
    },
    neuroPace: {
        type: Boolean
    }
});

module.exports = MedicalHistory = mongoose.model("MedicalHistory", MedicalHistorySchema);