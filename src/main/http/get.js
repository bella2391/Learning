// response check: curl -X GET http://localhost:8081/test?name=Taro

var http = require('http');
var url = require('url');

// output of 'get' request
var server = http.createServer(function(req, res) {
    var url_parse = url.parse(req.url, true);
    console.log(url_parse);
    res.end();
}).listen(8081);