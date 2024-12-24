const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

//let todos = [];

router.get('/', function(req, res, next) {
    conn.query(
        `SELECT * FROM tasks;`,
        (error, results) => {
            if (error) {
                console.log(error);
                return
            }
            
            console.log(results);
            res.render('index', {
                title: 'ToDo App',
                todos: results,
            })
        }
    )
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
    conn.query(
        `INSERT INTO tasks (user_id, content) VALUES (1, '${todo}');`,
        (error, results) => {
            console.log(error);
            res.redirect('/');
        }
    )
    //todos.push(todo);
    //res.redirect('/');
});

module.exports = router;
