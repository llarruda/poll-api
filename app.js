'use strict';

const http = require("http");
const url = require("url");
const fs = require('fs');
const mongoose = require('mongoose');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    let path = url.parse(req.url).pathname;

    console.log(path);

    if (path === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('{"status":"success"}');
        return;
    }
    else if (path === '/poll' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('{"poll":"success"}');
        return;
    }
    else {
        res.statusCode = 404;
        res.end('{"status":"Page Not Found"}');
        return;
    }
});

mongoose.connect('mongodb://localhost:27017/polls', { 
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(success => console.log('Connection status OK.'))
    .catch(error  => {
        console.error('DB connection error:', error.message);
        process.exit(1);
});

server.listen(port, () => {
    console.log(`Server up and running on port ${port}.`);
});