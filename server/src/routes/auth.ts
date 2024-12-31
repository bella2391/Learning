import express from 'express';
import passport from 'passport';
import baseurl from './baseurl'

const router: express.Router = express.Router();

router.get('/discord', passport.authenticate('discord'));

router.get('/discord/callback', passport.authenticate('discord', {
    failureRedirect: `${baseurl}/signin`,
    successRedirect: `${baseurl}/`,
}));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: `${baseurl}/signin`,
    successRedirect: `${baseurl}/`
}));

router.get('/x', passport.authenticate('x'));

router.get('/x/callback', passport.authenticate('x', {
    failureRedirect: `${baseurl}/signin`,
    successRedirect: `${baseurl}/`
}));

export default router;
