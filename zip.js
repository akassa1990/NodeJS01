var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var sourceFile = fs.createReadStream(__dirname + '/source.txt');
var destinationFile = fs.createWriteStream(__dirname + '/destination.gz');
sourceFile.pipe(gzip).pipe(destinationFile);



