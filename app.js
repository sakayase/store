const http = require('http');
const { request } = require('https');

const hostname = '127.0.0.1';
const port = 3000;
const routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('Root')
    },
    '/test': function test(request, response) {
        response.writeHead(200);
        response.end('Test');
    }
}

const server = http.createServer((request, response) => {
    if(request.url in routes) {
        return routes[request.url](request, response);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
