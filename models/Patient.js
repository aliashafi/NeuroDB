const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const medicationSchema = require('./Medication').schema;
const medicalHistorySchema = require('./MedicalHistory').schema;
const imagingSchema = require('./Imaging').schema;
const demographicSchema = require('./Demographic').schema;
const taskSchema = require('./Task').schema;



const PatientSchema = new Schema({
    researchId: {
        type: String,
        required: true,
    },
    dateOfSurgery: {
        type: Date,
        default: Date.now,
    }, 
    consent: {
        type: Boolean,
        default: false,
    },
    demographics: demographicSchema,
    medication: [medicationSchema],
    medicalHistory: medicalHistorySchema,
    imaging: imagingSchema,
    relatedRecord: [{type: Schema.Types.ObjectId, ref: 'Patient'}],
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}]
});

module.exports = Patient = mongoose.model('Patient', PatientSchema);