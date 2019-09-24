const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import electrodeSchema from './Electrode';

const ImagingSchema = new Schema({
    patientID: {
        type: Schema.Types.ObjectId,
        ref: 'patients',
        required: true
    },
    electrodeMontage: electrodeSchema 
});

module.exports = Imaging = mongoose.model('imaging', ImagingSchema)