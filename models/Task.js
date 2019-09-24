const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const TaskSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    researchers: [{_id: {type: String, ref: 'users'}}],
    notes: {
        type: String
    }
});

module.exports = Task = mongoose.model('task', TaskSchema);