'use strict';

const url = require('url');
const controller = require('./controllers/poll.js')

const sendResponse = (response, data, statusCode, headers) => {
    response.writeHead(statusCode, headers);
    response.end(data);
};

function generatePayload(path) {
        if (path === '/') {
            return controller.payloadGet;
        }
        else if (path === '/poll/:id') {
            return controller.payloadGetById;
        }
}

let actions = {
    'GET': (request, response) => {
      let path = url.parse(request.url).pathname;
      sendResponse(response, generatePayload(path), 200, {'Content-Type': 'application/json'});
    },
    'POST': (request, response) => {
      collectData(request, (formattedData) => {
        // do something with the formatted data e.g. store in db
        sendResponse(response, 'Success', 200, {'Content-Type': 'application/json'});
      });
    }
};

module.exports.handleRequest = (request, response) => {
    var action = actions[request.method];
    if (action) {

        let path = url.parse(request.url).pathname;

        switch (path) {
                case '/':

                    action(request, response);
                    break;
                case '/poll':
                    response.write('poll', response);
                    break;
                case '/poll/:id':
                    action(request, response);
                    break;
                default:
                    response.writeHead(404);
                    response.write('Page not found');
                    response.end();
        }
    }
};