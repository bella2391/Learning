import { Application, Request, Response, NextFunction } from 'express';
import csrf from 'csurf';

export default (app: Application) => {
    app.use(csrf({
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        },
    }));

    app.use((err: any, _: Request, res: Response, next: NextFunction) => {
        if (err) {
            if (err.code === 'EBADCSRFTOKEN') {
                res.status(403).send('CSRF token validation failed');
            } else {
                next(err);
            }
        }
    });
};
