const express = require('express');
const router = express.Router() ||

require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send('Welcome to the Home Page Jai shree ram');
});

router.post('/register', (req,res) => {

    const{ username, email, password, cpassword, role} = req.body;

    if(!username || !email || !password || !cpassword || !role ) {
        return res.status(422).json({error:"Non Correct Field Filling"});
    }

    User.findOne({email:email})
        .then((userExist) => {
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        } 
        const user = new User({username, email, password, cpassword, role});

        user.save().then(() => {
            res.status(201).json({ message:"User Registered Succefully to PANDAVAS.CSE"})
        }).catch((err)=> res.status(500).json({error:"Failed to Register"}));

    }).catch(err => { console.log(err); });  
    
    console.log(username);
    console.log(email);
    res.json({message:req.body});
    res.send('Mera register page');
});

module.exports = router;