const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Defining the structure of the document
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
    // profile: {
    //     fullName: {
    //         type: String,
    //         required: true,
    //         trim: true
    //     },
    //     avatar: {
    //         type: String,
    //         default: ''
    //     },
    //     contact: {
    //         type: String,
    //         trim: true
    //     },
    //     bio: {
    //         type: String,
    //         trim: true
    //     }
    // }
})

const User = mongoose.model('USER', userSchema);

module.exports = User;