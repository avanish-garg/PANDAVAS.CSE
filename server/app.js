const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express()// connected our app with express

dotenv.config({ path : './config.env'});
require('./db/conn');
// const User = require('./models/userSchema');
 
app.use(express.json());

// we link the router files to make our route easy
app.use(require('./router/auth.js'));

mongoose.connect("mongodb+srv://ayushsoni:ayush4521@cluster1.6cn2qee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")

const User = require('./models/userSchema');

const PORT = process.env.PORT;

 // Middleware
 const middleware = (req,res,next) => {
     console.log('Hello my middleware');
     next();
}

app.use(middleware);

// Home Page
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// Sign-Up Page
app.get('/signup', (req, res) => {
    res.send('Sign-Up Page');
});

// Login Page
app.get('/login', middleware,(req, res) => {
    res.send('Login Page');
});

// Profile Page
app.get('/aboutus', middleware, (req, res) => {
    res.send('Profile Page');
});


// Help/Support Page
app.get('/contact', (req, res) => {
    res.send('Help/Support Page');
});

app.listen( PORT, function() {
    console.log('Server is running at port no. ${PORT}');
})
