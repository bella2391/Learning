import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import baseurl from './baseurl'

const router: express.Router = express.Router();

router.get('/discord', (req, res, next) => {
    console.log('Redirecting to Discord...');
    passport.authenticate('discord', (err, user, info) => {
        if (err) {
            console.error('Error in /auth/discord:', err);
            return next(err);
        }
        if (!user) {
            console.log('No user found in /auth/discord:', info);
        }
        next();
    })(req, res, next);
});

router.get('/discord/callback', passport.authenticate('discord', {
    failureRedirect: `${baseurl}/signin`,
    successRedirect: `${baseurl}/`,
}), (req: Request, res: Response) => {
    console.log('Callback reached');
    res.json({ success: true, user: req.user });
});

export default router;
