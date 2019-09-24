const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const electrodeSchema = require('./Electrode').schema;


const ImagingSchema = new Schema({
    patientID: {
        type: Schema.Types.ObjectId,
        ref: 'patients',
        required: true
    },
    electrodeMontage: [electrodeSchema]
});

module.exports = Imaging = mongoose.model('imaging', ImagingSchema)