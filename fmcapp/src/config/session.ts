import * as dotenv from 'dotenv';
import * as path from 'path';
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

import { Application } from 'express';
import session from 'express-session';

const sessionSecret = process.env.COOKIE_SECRET || 'defaultSecret';

import connectSessionSequelize from 'connect-session-sequelize';
import { Sequelize } from 'sequelize';

const SequelizeStore = connectSessionSequelize(session.Store);

const sequelize = new Sequelize(process.env.MYSQL_DATABASE || '', process.env.MYSQL_USER || '', process.env.MYSQL_PASSWORD || undefined, {
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
});

export default (app: Application) => {
    app.use(
        session({
            secret: sessionSecret,
            store: new SequelizeStore({
                db: sequelize,
            }),
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 24 * 60 * 60 * 1000,
                //secure: process.env.NODE_ENV === 'production',
            },
        })
    );

    sequelize.sync();
};