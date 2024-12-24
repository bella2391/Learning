const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const knex = require('../db/knex');

const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

//let todos = [];

router.get('/', function(req, res, next) {
    knex('tasks')
        .select("*")
        .then(function (results) {
            console.log(results);
            res.render('index', {
                title: 'ToDo App',
                todos: results,
            });
        })
        .catch(function (err) {
            console.error(err);
            res.render('index', {
                title: 'ToDo App',
            });
        });
});

router.post('/', function(req, res, next) {
    conn.connect(err => {
        if (err) {
            console.log('error connecting: ' + err.stack);
            return
        }
        console.log('mysql connection established!');
    })
    const todo = req.body.add;
    knex("tasks")
        .insert({ user_id: 1, content: todo })
        .then(function () {
            res.redirect('/');
        })
        .catch(function (err) {
            console.error(err);
            res.render('index', {
                title: 'ToDo App',
            });
        })
});

module.exports = router;
