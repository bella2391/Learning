// check response by using form data: 
// curl -X POST -d 'named[1]=Yamada&name[2]=Taro&age=36' http://localhost:8081/
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res) {
    console.log(req.body);
    res.send('OK\n');
});
app.listen(8081);
