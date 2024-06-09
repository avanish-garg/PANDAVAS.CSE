const mongoose = require('mongoose');
const express = require('express');
const app = express(); // connected our app with express


const DB = 'mongodb+srv://ayushsoni:ayush4521@cluster1.6cn2qee.mongodb.net/RealTimeCollab?retryWrites=true&w=majority&appName=Cluster1';


mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology : true, 
    useFindAndModify : false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('No connection')); 

 // Middleware
 const middleware = (req,res, next) => {
     console.log('Hello my middleware');
     next();
 }
 middleware();

// Home Page
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// Sign-Up Page
app.get('/signup', (req, res) => {
    res.send('Sign-Up Page');
});

// Login Page
app.get('/login', (req, res) => {
    res.send('Login Page');
});

// Dashboard Page
app.get('/dashboard', (req, res) => {
    console.log('Hello my dashboard');
    res.send('Dashboard Page');
});

// Document Editing Page
app.get('/document-editing', (req, res) => {
    res.send('Document Editing Page');
});

// Instant Messaging Page
app.get('/instant-messaging', (req, res) => {
    res.send('Instant Messaging Page');
});

// Video Calls Page
app.get('/video-calls', (req, res) => {
    res.send('Video Calls Page');
});

// Task Management Page
app.get('/taskmanagement', (req, res) => {
    res.send('Task Management Page');
});

// Notification Center
app.get('/notifications', (req, res) => {
    res.send('Notification Center');
});

// Version Control Page
app.get('/version-control', (req, res) => {
    res.send('Version Control Page');
});

// Gamification Page
app.get('/gamification', (req, res) => {
    res.send('Gamification Page');
});

// Spreadsheet Editing Page
app.get('/spreadsheet-editing', (req, res) => {
    res.send('Spreadsheet Editing Page');
});

// Profile Page
app.get('/profile', (req, res) => {
    res.send('Profile Page');
});

// Settings Page
app.get('/settings', (req, res) => {
    res.send('Settings Page');
});

// Help/Support Page
app.get('/help', (req, res) => {
    res.send('Help/Support Page');
});

app.listen(3001, () => {
    console.log('Server is running at port no. 3000');
})
