import { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import fs from 'fs';
import './';
import basepath from '../util/basepath';

function getRandomFileName(directoryPath): string {
    const files = fs.readdirSync(directoryPath);
    const randomIndex = Math.floor(Math.random() * files.length);
    return files[randomIndex];
}

const localvals = async (req: Request, res: Response, next: NextFunction) => {
    res.locals.application_name = process.env.APP_NAME || 'App';
    res.locals.rootpath = basepath.rootpath;
    res.locals.hpurl = basepath.hpurl;
    res.locals.org_name = process.env.ORG_NAME || '';
    res.locals.org_year = process.env.ORG_YEAR || '';
    res.locals.org_logourl = process.env.ORG_LOGO_URL || '';
    res.locals.isAuth = req.isAuthenticated();
    res.locals.refurl = req.headers.referer || req.get('referer');
    res.locals.current_path = req.path;
    res.locals.discord_url = process.env.DISCORD_URL || '';

    // こういうのは毎回取ってこないように、セッションに保存したほうが良い
    // 要注意: アバター変更時にもセッションに保存しているものを更新しないといけない点
    const defaultAvatarPath: string = path.join(__dirname, '../public', 'images', 'avatar', 'default');
    const randomAvatarFileName = getRandomFileName(defaultAvatarPath);
    res.locals.avatar_path = `${basepath.rootpath}/images/avatar/default/${randomAvatarFileName}`;

    if (req.isAuthenticated()) {
        const user = req.user as any;
        if (user.custom_avatar) {
            res.locals.avatar_path = user.custom_avatar;
        } else if (user.avatar) {
            res.locals.avatar_path = user.avatar;
        }
    }

    next();
};

export default localvals;
