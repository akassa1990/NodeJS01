var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip();

var unzipMe = fs.createReadStream(__dirname + '/destination.gz');
var unzipped = fs.createWriteStream(__dirname + '/destination.txt');
unzipMe.pipe(gunzip).pipe(unzipped);


