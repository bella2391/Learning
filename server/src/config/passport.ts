import * as dotenv from 'dotenv';
import * as path from 'path';
import { Strategy as DiscordStrategy, Profile as DiscordProfile } from 'passport-discord';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

import { Application } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import knex from '../db/knex';
import bcrypt from 'bcrypt';
import User from '../models/user';
import expressSession from 'express-session';
import flash from 'connect-flash';

const sessionSecret = process.env.COOKIE_SECRET || 'defaultSecret';
const discordClientId = process.env.DISCORD_CLIENT_ID || '';
const discordClientSecret = process.env.DISCORD_CLIENT_SECRET || '';
const discordCallbackURL = process.env.DISCORD_CALLBACK_URL || '';

if (!discordClientId || !discordClientSecret || !discordCallbackURL) {
    throw new Error('Discord OAuth settings are missing in .env file.');
}

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
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });

    var scopes = ['identify', 'email', 'guilds', 'guild.join'];

    passport.use(new DiscordStrategy({
        clientID: 'id',
        clientSecret: 'secret',
        callbackURL: 'callbackURL',
        scope: scopes
    }, async (accessToken, _/* refreshToken */, profile: DiscordProfile, done) => {
        try {
            const existingUser = await knex('users').where({ discordId: profile.id }).first();
            if (existingUser) {
                return done(null, existingUser);
            }

            const newUser = await knex('users').insert({
                discordId: profile.id,
                username: profile.username,
                email: profile.email,
                avatar: profile.avatar,
                accessToken,
            }).returning('*');

            return done(null, newUser[0])
        } catch (err) {
            console.error('Error in DiscordStrategy: ', err)
            return done(null, false, { message: err });
        }
    }));

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    }, async (username: string, password: string, done) => {
        try {
            const user = await knex('users').where({ name: username }).first();
            if (!user) {
                return done(null, false, { message: 'Invalid username or password' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Invalid username or password' });
            }

            return done(null, user);
        } catch (err) {
            console.error('Error in LocalStrategy: ', err);
            return done(err);
        }
    }));

    app.use(
        expressSession({
            secret: sessionSecret,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 24 * 60 * 60 * 1000,
                //secure: process.env.NODE_ENV === 'production',
            },
        })
    );

    app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());
};
