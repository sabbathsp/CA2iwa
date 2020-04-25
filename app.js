const express = require('express') //This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content

const app = express();
const mongoose = require( 'mongoose');
require('dotenv/config');
// require('dotenv').config();


// routes
app.get('/', (req, res) => {
    res.send ('Lets do It');

});

//connect to db
// mongoose.connect('mongodb+srv://test:cctca2iwa@cluster0-nnxv8.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});



// listening the server

app.listen (3000);