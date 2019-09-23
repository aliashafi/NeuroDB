const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElectrodeSchema = new Schema({
    electrodeNum: {
        type: integer,
        required: false
    },
    electrodeID: {
        type: string,
        required: false
    },
    electrodeRegion: {
        type: string,
        required: false
    },

});

module.exports = Electrode = mongoose.model('electrode', ElectrodeSchema)