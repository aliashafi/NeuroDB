const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DemographicSchema = new Schema({
    birthDate: {
        type: Date,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    languageDominance: {
        type: String,
    },
    dominantHand: {
        type: String,
    },
    nativeLanguage: {
        type: String,
    }
});

module.exports = Demographic = mongoose.model('Demographic', DemographicSchema);