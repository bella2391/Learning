// require express 4.x below
// response check cmd: curl -X POST -d 'name=Yamada&age=26' http://localhost:8081/
const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('OK\n');
})

app.listen(8081);
