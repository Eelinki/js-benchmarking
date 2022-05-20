const fcgi = require('node-fastcgi');

if (!fcgi.isService()) {
    console.log('This script must be run as a FastCGI service');
    process.exit(1);
}

fcgi.createServer(function(req, res) {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Hello fastcgi');
    } else {
        res.writeHead(501);
        res.end();
    }
}).listen();
