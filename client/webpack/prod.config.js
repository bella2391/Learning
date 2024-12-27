const baseConfig = require('./base.config.js')
const { merge } = require('webpack-merge'); // if web-pack version < 5.0.3: follow https://stackoverflow.com/questions/62846123/getting-error-from-webpack-cli-typeerror-merge-is-not-a-function-in-webpack

const config = merge(baseConfig, {
    mode: 'production'
})

module.exports = config;
