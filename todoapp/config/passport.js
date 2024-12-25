const passport = require('passport');
const LocalStrategy = require('passport-local');
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const cookieSession = require('cookie-session');
const secret = 'secretCuisine123';
const flash = require('connect-flash');

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
        cookieSession({
            name: "session",
            keys: [secret],

            // Cookie Options
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        })
    );

    // register regenerate & save after the cookieSession middleware initialization
    app.use(function(req, res, next) {
        if (req.session && !req.session.regenerate) {
            req.session.regenerate = (cb) => {
                cb();
            }
        }
        if (req.session && !req.session.save) {
            req.session.save = (cb) => {
                cb();
            }
        }
        next();
    });

    app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());
};
