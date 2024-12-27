/* usingbasic rendering engine */
var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('views', __dirname + '/main/views');

app.engine('ejs', ejs.renderFile);

app.get('/', function(req, res) {
    res.render('test.ejs', {
        title: 'EJS Sample Code',
        content: 'This is EJS Sample'
    });
});

app.listen(8081, function() {
    console.log('Server running at http://localhost:8081/');
});

/* simply rendering */
/*var fs = require('fs');
var ejs = require('ejs');
var templete = fs.readFileSync('./views/test.ejs', 'utf8');

var buf = ejs.render(templete, {
    title: 'EJS Sample Code',
    content: 'This is EJS Sample...;'
});
console.log(buf);*/
