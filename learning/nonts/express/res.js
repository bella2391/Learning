// express module provides post/get request
var express = require('express');
var app = express();
app.listen(8081);

// check response cmd: curl -X GET http://localhost:8081/test1
// if there is a get request to '/test1'
app.get('/test1', function(req, res) {
    res.send('TEST1\n'); // send text as response
});

// check respobse cmd: curl -X POST http://localhost:8081/test2
// if there is a post request to '/test2'
app.post('/test2', function(req, res) {
    res.send('TEST2\n');
});
