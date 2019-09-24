const express = require('express');
const router = express.Router({mergeParams: true});

// use mergeParams option => 
    // i.e., const itemRouter = express.Router({mergeParams: true});

// nested index, show, create, update, delete

// nested route getting all tasks for a patient
router.get('/', (req, res) => {
    const patientId = req.patientId;
    // Find tasks with patientId: patentId
});

// Task show route
router.get('/:taskId', (req, res) => {
    Task.findById(req.params.taskId)
        .then(task => res.json(task))
        .catch(err => 
            res.satus(404).json({ notaskfound: 'No task found with that ID' }));
});

// Task create route
router.post('/', (req, res) => {
    // TODO: create validation for task input and comment in the following:
    
    // const { errors, isValid } = validateTaskInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    const newTask = new Task({
        // TODO: create task model and add fields to create a new task here
        //i.e., participants: req.body.participants
    });

    newTask.save().then(task => res.json(task));
});

// Task update route
router.patch('/:taskId', (req, res) => {
    const id = req.params.taskId;
    const updateObject = req.body;
    Task.update({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
        res.status(200).json({
            success: true,
            message: 'Task is updated',
            updatedTask: updatedObject,
        });
    })
    .catch( err => {
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again.'
        });
    } );
});

// Task delete route
router.delete('/:taskId', (req, res) => {
    const id = req.params.taskId;
    Task.findByIdAndRemove(id)
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

module.exports = router;