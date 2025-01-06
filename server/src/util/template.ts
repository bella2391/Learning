import { renderFile } from 'ejs';

function renderTemplate(filePath: string, data: any): Promise<string> {
    return new Promise((_, __) => {
        return new Promise((resolve, reject) => {
            renderFile(filePath, data, (err, html) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(html);
                }
            })
        })
    })
}

export default {
    renderTemplate,
};
