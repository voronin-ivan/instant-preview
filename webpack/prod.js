const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: 'error'
    },
    optimization: {
        minimizer: [
            new OptimeCssAssetsPlugin(),
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
