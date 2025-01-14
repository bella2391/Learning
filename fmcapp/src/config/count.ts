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
    if (req.method === "GET") {
        
    }
};