const express = require('express');
const router = express.Router();
const tasks = require('./tasks');
const mongoose = require("mongoose");
const Patient = require('../../models/Patient');
const validatePatientInput = require('../../validations/patient');

// index, show, create, update, delete

// Patients index route
router.get('/', (req, res) => {
    Patient.find()
        .sort({/* sort by EC number? */ })
        .then(patients => res.json(patients))
        .catch(err => res.status(404).json({ nopatientsfound: 'No patients found' }));
});

// Patient show route
router.get('/:patientId', (req, res) => {
    Patient.findById(req.params.patientId)
        .then(patient => res.json(patient))
        .catch(err => 
            res.status(404).json({ nopatientfound: 'No patient found with that ID' }));
});

// Patient create route
router.post('/', (req, res) => {
    
    const { errors, isValid } = validatePatientInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newPatient = new Patient({
        researchId: req.body.researchId,
        dateOfSurgery: req.body.dateOfSurgery,
        consent: req.body.consent,
        demographics: { 
            birthDate: req.body.demographics.birthDate,
            age: req.body.demographics.age,
            gender: req.body.demographics.gender,
            languageDominance: req.body.demographics.languageDominance,
            dominantHand: req.body.demographics.dominantHand,
            nativeLanguage: req.body.demographics.nativeLanguage 
        },
        medication: { 
            medicationName: req.body.medication.medicationName,
            medicationPurpose: req.body.medication.medicationPurpose
        },
        medicalHistory: { 
            BDI: req.body.medicalHistory.BDI,
            BAI: req.body.medicalHistory.BAI,
            epilepsyDiagnosis: req.body.medicalHistory.epilepsyDiagnosis,
            previousResection: req.body.medicalHistory.previousResection,
            neuroPace: req.body.medicalHistory.neuroPace
         },
        imaging: {
            patientId: req.body.imaging.patientId,
            electrodeMontage: req.body.imaging.electrodeMontage
        },
        relatedRecord: req.body.relatedRecord,
        tasks: req.body.tasks
    });

    newPatient.save().then(patient => res.json(patient));
});

// Patient update route
router.patch('/:patientId', (req, res) => {
    //Q: how does validation work for update?
    const id = req.params.patientId;
    const updateObject = req.body;
    Patient.update({ _id: id }, { $set: updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Patient is updated',
                updatePatient: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.'
        });
    });
});

// Patient delete route
router.delete('/:patientId', (req, res) => {
    const id = req.params.patientId;
    Patient.findByIdAndRemove(id)
    .exec()
    .then(()=> res.status(204).json({
        success: true,
    }))
    .catch((err) => res.status(500).json({
        success: false,
    }));
});

// Get all tasks for a patient 
router.use('/:patientId/tasks', tasks);

module.exports = router;