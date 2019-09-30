const express = require('express');
const router = express.Router({mergeParams: true});
const keys = require("../../config/keys");
const passport = require("passport");

const Task = require('../../models/Task');
const validateTaskInput = require('../../validations/tasks');

// nested index, show, create, update, delete


// INDEX
router.get('/', (req, res) => {
    const patientId = req.params.patientId;
    // Find tasks with patientId: patentId
    Task.find()
    .sort({ date: 1 })
    .then(tasks => res.json(tasks))
    .catch(err => res.status(404).json({ notasksfound: 'No tasks found'}))
});

// SHOW
router.get('/:taskId', (req, res) => {
    Task.findById(req.params.taskId)
        .populate('researchers', 'firstName lastName email')
        .then(task => res.json(task))
        .catch(err => 
            res.satus(404).json({ notaskfound: 'No task found with that ID' }));
});

// CREATE
router.post('/', (req, res) => {
    // TODO: create validation for task input and comment in the following:
    const patientId = req.params.patientId;
    const { errors, isValid } = validateTaskInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newTask = new Task({
        // TODO: create task model and add fields to create a new task here
        //i.e., participants: req.body.participants
        name: req.body.name,
        date: req.body.date,
        notes: req.body.notes,
        researchers: req.body.researchers
    });
    // req.body.researchers.forEach(researcherId => {
    //     debugger
    //     User.findById(researcherId, function(err, researcher) {
    //         if (err) return res.status(404).json({ researcherNotFound: 'provided researcher does not exist' });
    //         debugger
    //         newTask.researchers.push(researcher._id);
    //     });
    // });
    
    newTask.save()
    .then((task) => {
        Patient.findById(patientId).then(currPatient => {
            currPatient.tasks.push(task._id);        
            currPatient.save()
            .then(patient => {
                Patient.populate(patient, {path: 'tasks', populate: {path: 'researchers', select: 'firstName lastName email', model: 'User'}})
                .then(patient => res.json(patient));
            })
            ;
            // .populate({path: 'tasks', populate: {path: 'researchers', select: 'firstName lastName email', model: 'User'}})
            // .then((updatedPatient) => {
            //     return res.json(updatedPatient);
            // });

        });

    })
    .catch((err) => {
        if (err) return res.status(400).json({ problemAddingTask: 'Could not create a new task' });
    });


    // Patient.findById(patientId)
    //     .populate({path: 'tasks', populate: {path: 'researchers', select: 'firstName lastName email', model: 'User'}})
    //     .then((updatedPatient) => {
    //         return res.json(updatedPatient);
    //     });

});

// UPDATE
router.patch('/:taskId', (req, res) => {
    const id = req.params.taskId;
    const updateObject = req.body;

    Task.findOneAndupdate({ _id: id }, { $set: updateObject }, { new: true})
    .then(task => {
        Task.populate(task, {path: 'researchers', select: 'firstName lastName email'})
        .then(task => res.json(task));
        
    })
    .catch( err => {
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again.'
        });
    });

});

// DELETE
router.delete('/:taskId', (req, res) => {
    const id = req.params.taskId;
    Task.findByIdAndRemove(id)
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

module.exports = router;