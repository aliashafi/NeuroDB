const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResearcherSchema = new Schema({
    type: Schema.Types.ObjectId,
    ref: 'users'
})

const TaskSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    researchers: [ResearcherSchema],
    notes: {
        type: Text
    }
});

module.exports = Task = mongoose.model('task', TaskSchema);