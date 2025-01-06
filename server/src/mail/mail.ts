import * as dotenv from 'dotenv';
import * as path from "path";
import nodemailer from 'nodemailer';

const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

import template from '../util/template';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendOneTimePass(recipient: string, pass: string) {
    const html = await template.renderTemplate('../views/auth/onetime.ejs', { onetime: pass });
    await sendmail(recipient, "ワンタイムパスワード", html);
}

export async function sendVertificationEmail(recipient: string, redirectUrl: string) {
    const html = await template.renderTemplate('../views/auth/confirm-email.ejs', { redirect_url: redirectUrl });
    await sendmail(recipient, "FMCアカウントのメールアドレス認証", html);
}

async function sendmail(recipient: string, subject: string, body: string) {
    try {
        const mailOptions = {
            from: `"FMC Support" <${process.env.SMTP_USER}>`,
            to: recipient,
            subject: subject,
            html: body,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('sent mail successfully: %s', info.messageId)
    } catch (error) {
        console.error('error occurred while sending mail: ', error);
    }
}
