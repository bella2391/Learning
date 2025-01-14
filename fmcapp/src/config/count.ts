import express ,{ Request, Response, NextFunction } from 'express';
import path from 'path';
import knex from '../db/knex';

function disnum(num: number): number[] {
    const b: number[] = [];

    while (num > 0) {
        const digit = num % 10;
        b.unshift(digit);
        num = Math.floor(num / 10);
    }

    return b;
}

const counter = async (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== "GET") {
        next();
        return;
    }

    try {
        const keta = 5;
        if (typeof req.ip !== "string") {
            throw new Error("Invalid type of IP");
        }
        const iphost: string = req.ip;

        const excepip = [
            "aterm.me",
        ];

        const excephostkeyRows = await knex('hostnotcount').select('host');
        const excephostkeys = excephostkeyRows.map(row => row.host);

        let excephostcheck = true;
        for (const host of excephostkeys) {
            if (new RegExp(host).test(iphost)) {
                excephostcheck = false;
                break;
            }
        }

        if (/^(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(iphost)) {
            excephostcheck = false;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const rows = await knex('counter3')
            .where('dtime', '>=', today.toISOString()).whereNot('ip', '').select();
        const ips = rows.map(row => row.ip);

        let first = false;
        if (ips.length === 0) {
            first = true;

            const [{ count }] = await knex('counter3').count<{ count: number }[]>('* as count');

            const d: number[] = disnum(count + 1);

            
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server failed to calc your access count');
    }
};

export default counter;
