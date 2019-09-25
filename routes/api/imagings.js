const express = require('express');
const router = express.Router({mergeParams: true});


const validateElectrodeInput = require("../../validations/electrode")


// use mergeParams option => 
    // i.e., const itemRouter = express.Router({mergeParams: true});

// nested index, show, create, update, delete

// nested route getting all imaging data for a patient
router.get('/', (req, res) => {
    const patientId = req.patientId;
    // Find imaging data with patientId: patentId
});

// Imaging show route
router.get('/:imagingId', (req, res) => {
    Imaging.findById(req.params.imagingId)
        .then(imaging => res.json(imaging))
        .catch(err => 
            res.satus(404).json({ noimagingfound: 'No imaging found with that ID' }));
});

// Imaging create route
router.post('/', (req, res) => {
    // TODO: create validation for imaging input and comment in the following:
    
    const { errors, isValid } = validateElectrodeInput(req.body.electrodes);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newImaging = new Imaging({
        patientId: req.body.patientId,
        electrodes: req.body.electrodes
    });

    newImaging.save().then(imaging => res.json(imaging));
});

// Imaging update route
router.patch('/:imagingId', (req, res) => {
    const id = req.params.imagingId;
    const updateObject = req.body;
    Imaging.update({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
        res.status(200).json({
            success: true,
            message: 'Imaging is updated',
            updatedImaging: updatedObject,
        });
    })
    .catch( err => {
        res.status.(500).json({
            success: false,
            message: 'Server error. Please try again.'
        });
    } );
});

// Imaging delete route
router.delete('/:imagingId', (req, res) => {
    const id = req.params.imagingId;
    Imaging.findByIdAndRemove(id)
    .exec()
    .then(() => {
        res.status(204).json({
            success: true,
        })
        .catch( err => {
            res.status(500).json({
                success: false,
            });
        });
    });
});