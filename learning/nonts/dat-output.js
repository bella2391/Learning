var fs = require('fs');

fs.readFile('./data.dat', 'utf8', function(err, data) {
    console.log(data);
});