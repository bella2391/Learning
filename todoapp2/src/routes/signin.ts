import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, _: NextFunction) => {
    const isAuth: boolean = req.isAuthenticated();
    res.render('signin', {
        title: 'Sign in',
        isAuth: isAuth,
    });
});

router.post('/', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true,
    }
));

export default router;
