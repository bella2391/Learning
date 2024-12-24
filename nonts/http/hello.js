// check response: curl http://127.0.0.1:8081/
// simply 'Hello world!' text will be shown
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    const responseMessage = "<h1>Hello World!</h1>";
    res.write(responseMessage);
    res.end();
    console.log(`Sent a response: ${responseMessage}`);
}).listen(8081);

