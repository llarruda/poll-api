'use strict';

const url = require('url');

module.exports.handleRequest = (request, response) => {

    response.writeHead(200, {
        'Content-Type' : 'application/json'
    });

    let path = url.parse(request.url).pathname;
    
    switch (path) {
        case '/':
            response.write('Home', response);
            break;
        case '/poll':
            response.write('poll', response);
            break;
        default:
            response.writeHead(404);
            response.write('Page not found');
            response.end();
    }
}