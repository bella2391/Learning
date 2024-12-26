import * as express from 'express';

declare global {
    namespace Express {
        interface User {
            id: number;
        }

        interface AuthenticatedRequest extends express.Request {
            user: User;
        }

        interface Request {
            isAuthenticated(): this is AuthenticatedRequest;
        }
    }
}
