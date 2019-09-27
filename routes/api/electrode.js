const express = require('express');
const router = express.Router({ mergeParams: true });
const keys = require("../../config/keys");
const passport = require("passport");

const Electrode = require('../../models/Electrode');
const validateTaskInput = require('../../validations/electrode');

// use mergeParams option => 
// i.e., const itemRouter = express.Router({mergeParams: true});

// nested index, show, create, update, delete



// INDEX
router.get('/', (req, res) => {
    const patientId = req.patientId;
    // Find tasks with patientId: patentId
    Electrode.find()
        .sort({ date: 1 })
        .then(electrode => res.json(electrode))
        .catch(err => res.status(404).json({ notasksfound: 'No elecs found' }))
});

// SHOW
router.get('/:electrodeId', (req, res) => {
    Electrode.findById(req.params.electrodeId)
        .then(electrode => res.json(electrode))
        .catch(err =>
            res.satus(404).json({ noelectrodefound: 'No electrode found with that ID' }));
});

// CREATE
router.post('/', (req, res) => {
    // TODO: create validation for task input and comment in the following:

    const { errors, isValid } = validateTaskInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newElectrode = new Electrode({
        // TODO: create task model and add fields to create a new task here
        //i.e., participants: req.body.participants
        electrodeNum: request.body.electrodeNum,
        electrodeID: request.body.electrodeID,
        electrodeRegion: request.body.electrodeRegion,
    });

    newElectrode.save().then(electrode => res.json(electrode));
});

// UPDATE
router.patch('/:electrodeId', (req, res) => {
    const id = req.params.electrodeId;
    const updateObject = req.body;
    Task.update({ _id: id }, { $set: updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Electrode is updated',
                updatedTask: updatedObject,
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.'
            });
        });
});

// DELETE
router.delete('/:electrodeId', (req, res) => {
    const id = req.params.electrodeId;
    Electrode.findByIdAndRemove(id)
        .exec()
        .then(() => {
            res.status(204).json({
                success: true,
            })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                    });
                });
        });
});

module.exports = router;