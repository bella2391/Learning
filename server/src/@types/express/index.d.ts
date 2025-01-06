import { JwtPayload as OriginalJwtPayload } from 'jsonwebtoken';
import 'express';

declare global {
    namespace Jsonwebtoken {
        interface JwtPayload extends OriginalJwtPayload {
            id: string;
            name: string;
            email: string;
            iat: number;
            exp: number;
        }
    }

    namespace Express {
        interface Request {
            payload?: Jsonwebtoken.JwtPayload;
            payload2?: Jsonwebtoken.JwtPayload;
        }
    }
}

/*import 'express';
declare global {
    namespace Express {
        interface Request {
            payload?: Jsonwebtoken.JwtPayload;
            payload2?: Jsonwebtoken.JwtPayload;
        }
    }
}*/

//import 'Jsonwebtoken';
/*import { Express } from 'express-serve-static-core';

declare module 'express-serve-static-core' {
    interface Request {
        payload?: Jsonwebtoken.JwtPayload;
        payload2?: Jsonwebtoken.JwtPayload;
    }
}*/

/*declare module 'express' {
    interface Request {
        csrfToken?: () => string | undefined;
        payload?: Jsonwebtoken.JwtPayload;
        payload2?: Jsonwebtoken.JwtPayload;
    }
}*/
