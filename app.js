'use strict';

const http = require("http");
const mongoose = require('mongoose');
const router = require('./routes');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/polls', { 
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(success => console.log('Connection status OK.'))
.catch(error  => {
    console.error('DB connection error:', error.message);
    process.exit(1);
});

const server = http.createServer(router.handleRequest);

server.listen(port, () => {
    console.log(`Server up and running on port ${port}.`);
});