const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const fs = require("fs");

const BUILD_ROOT = path.join(__dirname, '../dist');
const BUILD_ROOT2 = path.join(__dirname, '../../todoapp/src/public/javascripts');
const SRC_ROOT = path.join(__dirname, '../src');

module.exports = {
    context: SRC_ROOT,
    entry: path.resolve(SRC_ROOT, 'index.ts'),
    externals: [nodeExternals()],
    output: {
        filename: 'client.js',
        path: BUILD_ROOT,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json'
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js', '.json' ],
        alias: {
            '@': SRC_ROOT
        }
    },
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tapAsync('AfterEmitPlugin', (compilation, callback) => {
                    const sourcePath = path.join(BUILD_ROOT, 'client.js');
                    const destPath = path.join(BUILD_ROOT2, "client.js");
                    //fs.copyFileSync(sourcePath, destPath);
                    fs.copyFile(sourcePath, destPath, (err) => {
                        if (err) throw err;
                        console.log('File was copied to destination');
                    });

                    callback();
                });
            }
        }
    ]
}