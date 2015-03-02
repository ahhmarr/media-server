var http = require('http'),
    ms = require('./mediaserver');

http.createServer(function (req, res) {

    ms.pipe(req, res, "sing.mp3");

}).listen(1111, '127.0.0.1');
