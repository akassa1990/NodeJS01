var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('Request Received!');
    res.writeHead(200, {'Content-Type' : 'image/jpeg'});
    //res.writeHead(200, {'Content-Type': 'image/jpeg'});
    fs.createReadStream('./Wild_Turkey.jpg').pipe(res);
}).listen(9090, '127.0.0.1');
