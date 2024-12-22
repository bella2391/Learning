// check response cmd: curl -X POST -d 'Hello' http://localhost:8081/
var express = require('express');
var app = express();

app.use(express.raw({ type: '*/*' }));

app.post('/', function(req, res) {
    console.log(req.body);
    res.send('OK\n');
})
app.listen(8081);