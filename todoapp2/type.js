const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log(typeof next);
});