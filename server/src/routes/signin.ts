import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import baseurl from './baseurl';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, _: NextFunction) => {
    if (req.isAuthenticated()) {
        res.render('signin', {
            title: 'Sign in',
            isAuth: true,
            baseurl: baseurl,
        });
    } else {
        res.render('signin', {
            title: 'Sign in',
            isAuth: false,
            baseurl: baseurl,
        });
    }
});

router.post('/', passport.authenticate('local', {
        successRedirect: `${baseurl}/`,
        failureRedirect: `${baseurl}/signin`,
        failureFlash: true,
    }
));

export default router;
