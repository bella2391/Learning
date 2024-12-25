const passport = require('passport');
const LocalStrategy = require('passport-local');
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const expressSession = require('express-session');
const flash = require('connect-flash');
const secret = 'secretCuisine123';

module.exports = function (app) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function(id, done) {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    }, function(username, password, done) {
        knex("users")
        .where({ name: username, })
        .select("*")
        .then(async function(results) {
            if (results.length == 0) {
                return done(null, false, {  message: 'Invalid User'  });
            } else if (await bcrypt.compare(password, results[0].password)) {
                return done(null, results[0]);
            } else {
                return done(null, false, { message: 'Invalid User' });
            }
        })
        .catch(function(err) {
            console.error(err);
            return done(null, false, { message: err.toString() });
        })
    }));

    app.use(
        expressSession({
            secret: secret,
            resave: false,
            saveUninitialized: false,
            cokkie: { maxAge: 24 * 60 * 60 * 1000 },
        })
    );

    app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());
};
