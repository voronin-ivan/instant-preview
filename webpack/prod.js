const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: 'error'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    parallel: true,
                    cache: true
                }
            })
        ]
    }
});
