const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./common.js');
const babelLoader = require('./loaders/babel');

const threshold = 10240;
const minRatio = 0.8;
const extensionsForCompress = /\.(js|css|svg|png)$/;
const useBundleAnalyzer = Boolean(process.env.ANALYZER);

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
    optimization: {
        minimizer: [
            new OptimeCssAssetsPlugin(),
            new TerserPlugin({
                parallel: true,
                cache: true,
                sourceMap: true,
            }),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CompressionPlugin({
            filename: '[file].gz',
            algorithm: 'gzip',
            test: extensionsForCompress,
            threshold,
            minRatio,
        }),
        new CompressionPlugin({
            filename: '[file].br',
            algorithm: 'brotliCompress',
            test: extensionsForCompress,
            compressionOptions: {
                level: 11,
            },
            threshold,
            minRatio,
        }),
        useBundleAnalyzer && new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
        }),
    ].filter(Boolean),
});
