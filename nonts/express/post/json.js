// check respose cmd: curl -X POST -H 'Content-Type: application/json' -d '{"name":["Yamada", "Taro"], "Age":36}' http://localhost:8081/
var express = require('express');
var app = express();

app.use(express.json());

app.post('/', function(req, res) {
    console.log(req.body);
    res.send('OK\n');
});
app.listen(8081);