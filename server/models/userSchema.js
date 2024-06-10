const jwt = require('jsonwebtoken');
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
    },
    tokens : [
        {
            token: {
                type:String,
                required:true
            }
        }
    ]
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
        this.password= bcrypt.hash(this.password, 12);
        this.cpassword= bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// We are generating token 
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id:this._id.toString()}, 'MYNAMEISAYUSHSONIIAMANCOMPUTERSCIENCEENGINEER' );
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;

    } catch(err) {
        console.log(err);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;