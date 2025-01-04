import * as dotenv from 'dotenv';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

function getURL(): string {
    var url: string = '';
    if (process.env.NODE_ENV === 'production') {
        if (process.env.IS_HTTPS === 'true') {
            url += 'https://';
        }
        url += process.env.PRODUCTION_HOST || 'localhost';
    } else {
        url += 'http://localhost';
    }

    if (process.env.PORT) {
        url  += ":" + process.env.PORT;
    }
    url +=  getRootPath() + '/'

    return url;
}

function getRootPath(): string {
    return process.env.NODE_ENV === 'production'
        ? process.env.PROXY_REVERSE_PASS || '/dev'
        : '';
}

const url: string = getURL();
const rootpath: string = getRootPath();

export default {
    url,
    rootpath,
};
