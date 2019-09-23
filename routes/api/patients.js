const express = require('express');
const router = express.Router();

// index, show, create, update, delete
// TODO: add app.use("/api/patients", patients); to app.js (and also import patients router file)

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
    // TODO: create validation for patient input and comment in the following:
    
    // const { errors, isValid } = validatePatientInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    const newPatient = new Patient({
        // TODO: create patient model and add fields to create a new patient here
        //i.e., ecId: req.body.ecId
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


module.exports = router;