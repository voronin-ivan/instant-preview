const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.(mjs|js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                    ],
                },
            },
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
            }),
        ],
    },
});
