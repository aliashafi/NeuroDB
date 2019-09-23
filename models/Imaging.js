const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImagingSchema = new Schema({
    brainReconstruction: {
        type: File
    },
    MRI: {
        type: File
    },
    CT: {
        type: File
    }
});

module.exports = Imaging = mongoose.model('imaging', ImagingSchema)