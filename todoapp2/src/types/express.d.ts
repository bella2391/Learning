import * as express from 'express';

declare global {
    namespace Express {
        interface User {
            id: number; // 必要なプロパティを追加
        }

        interface AuthenticatedRequest extends express.Request {
            user: User;
        }

        interface Request {
            isAuthenticated(): this is AuthenticatedRequest;
        }
    }
}


