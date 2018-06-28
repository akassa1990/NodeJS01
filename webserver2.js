var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('Request Received!');
    res.writeHead(200, {'Content-Type' : 'image/jpeg'});
    //res.writeHead(200, {'Content-Type': 'image/jpeg'});
    fs.readFile('./Wild_Turkey.jpg', function (err, image) {
        if (err) throw err;
        res.end(image);
    });
}).listen(9090, '127.0.0.1');

