import express from 'express';
import passport from 'passport';
import basepath from '../util/basepath'

const router: express.Router = express.Router();

router.get('/discord', passport.authenticate('discord'));

router.get('/discord/callback', passport.authenticate('discord', {
    failureRedirect: `${basepath.rootpath}/signin`,
    successRedirect: `${basepath.rootpath}/`,
}));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: `${basepath.rootpath}/signin`,
    successRedirect: `${basepath.rootpath}/`
}));

router.get('/x', passport.authenticate('x'));

router.get('/x/callback', passport.authenticate('x', {
    failureRedirect: `${basepath.rootpath}/signin`,
    successRedirect: `${basepath.rootpath}/`
}));

export default router;
