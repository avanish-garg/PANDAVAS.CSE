const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE; 

mongoose.connect( DB, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true, 
    useFindAndModify : false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('No connection')); 