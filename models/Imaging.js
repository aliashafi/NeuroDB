const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const electrodeSchema = require('./Electrode').schema;


const ImagingSchema = new Schema({
    electrodeMontage: [electrodeSchema]
});

module.exports = Imaging = mongoose.model('Imaging', ImagingSchema)