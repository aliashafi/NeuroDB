const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImagingSchema = new Schema({
    brainReconstruction: {
        type: File,
        required: true
    },
    MRI: {
        type: File,
        required: true
    },
    CT: {
        type: File,
        required: true
    }
});

module.exports = Imaging = mongoose.model('imaging', ImagingSchema)