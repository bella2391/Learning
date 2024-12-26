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
        console.log('serializeUser');
        const typedUser = user as Express.User;
        console.log(`user: ${JSON.stringify(user)}`);
        //console.log(`user.id: ${typeof typedUser.id} - ${typedUser.id}`);
        done(null, typedUser);
    });

    passport.deserializeUser(async (id: number | any, done) => {
        console.log('deserializeUser');
        console.log(`id: ${typeof id}`);
        if (typeof id !== 'number') {
            if (typeof id === 'string' && !isNaN(Number(id))) {
                id = Number(id);
            } else {
                console.error('Invalid ID type:', typeof id);
                return done(new Error(`Invalid ID type: ${typeof id}`), null);
            }
            console.error(`Invalid ID type: ${typeof id}}`);
            return done(new Error('Invalid ID type'), null);
        }

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
