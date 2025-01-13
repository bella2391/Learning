import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import basepath from '../util/basepath';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, _: NextFunction) => {
    if (req.query.n) {
        const n: number = Number(req.query.n);
        if (!isNaN(n)) {
            req.session.n = n;
        }
    }
    res.render('signin', { title: 'Sign in' });
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            if (info && info.redirectUrl) {
                return res.redirect(info.redirectUrl);
            }
            return res.status(401).send(info.message || 'Authentication failed')
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            if (req.session.n) {
                return res.redirect('/minecraft/uuid_check.php');
            } else {
                return res.redirect(`${basepath.rootpath}/`);
            }
        });
    })(req, res, next);
});

export default router;