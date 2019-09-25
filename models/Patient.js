const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const medicationSchema = require('./Medication').schema;
const medicalHistorySchema = require('./MedicalHistory').schema;
const imagingSchema = require('./Imaging').schema;
const demographicSchema = require('./Demographic').schema;
const taskSchema = require('./Task').schema;

// RelatedRecrodSchema represents other records present in the system for the same patient. It only contains the objectId of the record.
// const RelatedRecordSchema = new Schema({
//     type: Schema.Types.ObjectId,
//     ref: 'patients'
// });
// const TaskSchema = new Schema({
//     type: Schema.Types.ObjectId,
//     ref: 'tasks'
// });

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
    medication: medicationSchema,
    medicalHistory: medicalHistorySchema,
    imaging: imagingSchema,
    relatedRecord: [{_id: {type: String, ref: 'patients'}}],
    tasks: [taskSchema]
});

module.exports = Patient = mongoose.model('patients', PatientSchema);