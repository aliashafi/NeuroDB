// user model/migration

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// like rails migrations: t.string handle, null: false
// creating schema

// defining documents within documents:
// const Comment = new Schema({
//      body: String,
//      date: Date,
// })

// const Post = new Schema({
//      title: String,
//      comments: [Comment]
// })


const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("users", UserSchema)
module.exports = User;