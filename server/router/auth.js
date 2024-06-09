const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Home Page Jai shree ram');
});

router.post('/register', (req,res) => {
    console.log(req.body);
    res.json({message:req.body});
    //res.send('Mera register page');
});

module.exports = router;