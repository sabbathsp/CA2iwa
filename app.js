const express = require('express'); //This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content

const app = express();
const mongoose = require( 'mongoose');
require('dotenv/config');


//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) => {
    res.send ('Lets do It');

});

//connect to db
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