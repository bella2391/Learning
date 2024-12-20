// check response: curl http://127.0.0.1:8081/
// simply 'Hello world!' text will be shown
var http = require('http');
var server = http.createServer(function(req, res) {
    res.write("Hello world!\n");
    res.end();
}).listen(8081);

