const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./common.js');
const babelLoader = require('./loaders/babel');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            // transpile some deps to ES5
            test: /\.(mjs|js|jsx)$/,
            use: babelLoader,
        }],
    },
    performance: {
        hints: 'warning',
    },
    optimization: {
        minimizer: [
            new OptimeCssAssetsPlugin(),
            new TerserPlugin({
                parallel: true,
                cache: true,
                sourceMap: true
            }),
        ],
    },
});
