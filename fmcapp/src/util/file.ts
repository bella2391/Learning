import fs from 'fs';

export function getRandomFileName(directoryPath): string {
    const files = fs.readdirSync(directoryPath);
    const randomIndex = Math.floor(Math.random() * files.length);
    return files[randomIndex];
}

export function getFiles(directoryPath): string[] {
    return fs.readdirSync(directoryPath);
}
