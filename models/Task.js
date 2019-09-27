const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');



const TaskSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    researchers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    notes: {
        type: String
    }
});

module.exports = Task = mongoose.model('Task', TaskSchema);