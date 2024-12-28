import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import baseurl from './baseurl';
import bodyParser from 'body-parser';

const router: express.Router = express.Router();
const parseform = bodyParser.urlencoded({ extended: true });

import csrf from 'csurf';
// CSRFミドルウェア
const csrfProtection = csrf({
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    }
 });

router.get('/', parseform, csrfProtection, (req: Request, res: Response, _: NextFunction) => {
    if (req.isAuthenticated()) {
        res.render('signin', {
            title: 'Sign in',
            isAuth: true,
            baseurl: baseurl,
            csrfToken: req.csrfToken?.(),
        });
    } else {
        res.render('signin', {
            title: 'Sign in',
            isAuth: false,
            baseurl: baseurl,
            csrfToken: req.csrfToken?.(),
        });
    }
});

router.post('/', parseform, csrfProtection, (req: Request, res: Response, next: NextFunction) => {
    console.log('CSRF Token:', req.csrfToken?.());
    console.log('Cookies:', req.cookies);
    passport.authenticate('local', {
        successRedirect: `${baseurl}/`,
        failureRedirect: `${baseurl}/signin`,
        failureFlash: true,
    })(req, res, next);  // CSRF検証後にpassport.authenticateを呼び出す
});

export default router;
