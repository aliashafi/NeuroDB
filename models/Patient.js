const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const medicationSchema = require('./Medication');
const medicalHistorySchema = require('./MedicalHistory');
const imagingSchema = require('./Imaging');
const demographicSchema = require('./Demographic');

// RelatedRecrodSchema represents other records present in the system for the same patient. It only contains the objectId of the record.
const RelatedRecordSchema = new Schema({
    type: Schema.Types.ObjectId,
    ref: 'patients'
});
const TaskSchema = new Schema({
    type: Schema.Types.ObjectId,
    ref: 'tasks'
});

const PatientSchema = new Schema({
    researchId: {
        type: String,
        required: true,
    },
    dateOfSurgery: {
        type: Date,
        default: Date.now,
    }, 
    relatedRecord: [RelatedRecordSchema],
    consent: {
        type: Boolean,
        default: false,
    },
    demographics: demographicSchema,
    medication: medicationSchema,
    medicalHistory: medicalHistorySchema,
    imaging: imagingSchema,
    tasks: [TaskSchema]
});

module.exports = Patient = mongoose.model('patients', PatientSchema);