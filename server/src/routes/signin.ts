import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import basepath from '../util/basepath';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, _: NextFunction) => {
    if (req.isAuthenticated()) {
        res.render('signin', {
            title: 'Sign in',
            isAuth: true,
        });
    } else {
        res.render('signin', {
            title: 'Sign in',
            isAuth: false,
        });
    }
});

router.post('/', passport.authenticate('local', {
        successRedirect: `${basepath.rootpath}/`,
        failureRedirect: `${basepath.rootpath}/signin`,
        failureFlash: true,
    }
));

export default router;