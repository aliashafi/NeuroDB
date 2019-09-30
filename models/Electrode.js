const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElectrodeSchema = new Schema({
    electrodeNum: {
        type: Number,
        required: false
    },
    electrodeID: {
        type: String,
        required: false
    },
    electrodeRegion: {
        type: String,
        required: false
    },

});

module.exports = Electrode = mongoose.model('Electrode', ElectrodeSchema)