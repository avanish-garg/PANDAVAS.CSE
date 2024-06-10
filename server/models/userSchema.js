const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    // Defining the structure of the document
    username: {
        type: String,
        required: true,
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



// Hashing the password
userSchema.pre('save', async function(next) {
    console.log("Hi i am inside");
    if(this.isModified('password')) {
        this.password=bcrypt.hash(this.password, 12);
        this.cpassword=bcrypt.hash(this.cpassword, 12);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;