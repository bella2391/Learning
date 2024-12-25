const passport = require('passport');
const LocalStrategy = require('passport-local');
const knex = require('../db/kenx');

module.exports = function (app) {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    }, function(username, password, done) {

    }));
};
