const path = require('path');
module.exports = {
    entry: { bundle: "./client/src/app.ts" },
    output: {
        path: path.join(__dirname, "main"),
        filename: "[name].js"
    },
    resolve: { extensions: [".ts", ".js"] },
    devServer: {
        static: { directory: path.join(__dirname, "../src/main") },
        port: 8081
    },
    module: {
        rules: [ { test: /\.ts$/, loader: "ts-loader" } ]
    }
}