const http = require('http');

const hostname = '127.0.0.1';
const port = 8336;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello node.js');
});

server.listen(port, hostname, () => {});