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
    passport.serializeUser((user, done) => {
        if (typeof user !== 'object' || user === null) {
            throw new Error('User must be a non-null object');
        }
        const user_info = user as { id: number; [key: string]: any };
        if (!('id' in user_info) || typeof user_info.id !== 'number') {
            throw new Error('User object does not contain a valid id');
        }
        done(null, user_info.id);
    });

    passport.deserializeUser(async (id: number, done) => {
        try {
            const user: Express.User = await User.findById(id);
            console.log(`user: ${user}`);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    }, (username: string, password: string, done) => {
        knex("users")
            .where({ name: username })
            .select("*")
            .then(async (results) => {
                if (results.length == 0) {
                    return done(null, false, { message: 'Invalid User' });
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

    app.use(
        expressSession({
            secret: sessionSecret,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 24 * 60 * 60 * 1000 },
        })
    );

    app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());
};
