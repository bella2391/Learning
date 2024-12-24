const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

let todos = [];

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'ToDo App',
        todos: todos,
    });
});

router.post('/', function(req, res, next) {
    const todo = req.body.add;
    todos.push(todo);
    res.redirect('/');
});

module.exports = router;
