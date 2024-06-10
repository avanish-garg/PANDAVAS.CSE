const express = require('express');
const router = express.Router() ||

require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send('Welcome to the Home Page Jai shree ram');
});

// Using promises
// router.post('/register', (req,res) => {

//     const{ username, email, password, cpassword, role} = req.body;

//     if(!username || !email || !password || !cpassword || !role ) {
//         return res.status(422).json({error:"Non Correct Field Filling"});
//     }

//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"});
//         } 
//         const user = new User({username, email, password, cpassword, role});

//         // Here we need to some thing to hash password and cpassword before saving
//         // them in database

//         user.save().then(() => {
//             res.status(201).json({ message:"User Registered Succefully to PANDAVAS.CSE"})
//         }).catch((err)=> res.status(500).json({error:"Failed to Register"}));

//     }).catch(err => { console.log(err); });  
    
//     //  console.log(username);
//     //  console.log(email);
//     //  res.json({message:req.body});
//     //  res.send('Mera register page');
// });



router.post('/register', async (req,res) => {

    const{ username, email, password, cpassword, role} = req.body;

    if(!username || !email || !password || !cpassword || !role ) {
        return res.status(422).json({error:"Non Correct Field Filling"});
    }

    try {

        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        } else if(password != cpassword){
            return res.status(422).json({error:"Password is not matching"});
        } else {
            const user = new User({username, email, password, cpassword, role});

            await user.save();
    
            res.status(201).json({ message:"User Registered Succefully to PANDAVAS.CSE"})
        }

       

        
    } catch (err){
        console.log(err);
    }

});






// login route
router.post('/login', async (req,res) => {
    // console.log(req.body);
    //res.json({message : "awesome"});

    try{
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({error:"Please fill the data"})
        }

        const userLogin = await User.findOne({email:email});
        
        console.log(userLogin);
        if(!userLogin) {
            res.status(400).json({error:"User not avaiable"});
        } else {
        res.json({message:"User signin successfully"});
        }

    } catch(err) {
        console.log(err);
    }
}) 

module.exports = router;