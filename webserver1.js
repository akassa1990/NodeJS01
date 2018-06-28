var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    console.log('Request Received!');
    res.writeHead(200, {'Content-Type' : 'image/jpeg'});
    var image = fs.readFileSync(__dirname + '/Wild_Turkey.jpg');
    res.end(image);

    // res.writeHead(200, {'Content-Type' : 'text/plain'});
    // res.end('Hello From Server');

}).listen(9090, '127.0.0.1');

