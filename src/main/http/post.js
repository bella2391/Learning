// check response cmd: curl -X POST -d 'name=Taro' http://localhost:8081/test
var http = require('http');

// chunk means fragment data
var server = http.createServer(function(req, res) {
    if (req.method == 'POST') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            console.log(body);
            res.end();
        })
    }
}).listen(8081);