'use src';

module.exports.controller = (app) => {
    (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plan' });
        res.end('poll controller');
    }
}