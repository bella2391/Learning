import { Application } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import knex from '../db/knex';
import bcrypt from 'bcrypt';
import User from '../models/user';
import expressSession from 'express-session';
import flash from 'connect-flash';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

var sessionSecret = process.env.COOKIE_SECRET || 'defaultSecret';

export default (app: Application) => {
    app.use(
        expressSession({
            secret: sessionSecret,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 24 * 60 * 60 * 1000 },
        })
    );

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    }, (username: string, password: string, done) => {
        knex("users")
            .where({ name: username, })
            .select("*")
            .then(async (results) => {
                if (results.length == 0) {
                    return done(null, false, {  message: 'Invalid User'  });
                } else if (await bcrypt.compare(password, results[0].password)) {
                    return done(null, results[0]);
                } else {
                    return done(null, false, { message: 'Invalid User' });
                }
            })
            .catch((err) => {
                console.error(err);
                return done(null, false, { message: err.toString() });
            })
    }));

    app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user: Express.User, done) => {
        done(null, user);
    });

    passport.deserializeUser(async (id: number, done) => {
        try {
            const user: Express.User = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
};
