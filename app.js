const express = require('express') //This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content

const app = express();

// routes
app.get('/', (req, res) => {
    res.send ('Lets do It');

});

// listening the server

app.listen (3000);