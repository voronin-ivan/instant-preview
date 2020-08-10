const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const postCssLoader = require('./loaders/postcss');
const cssLoader = require('./loaders/css');
const imgLoader = require('./loaders/img');

const basePath = path.resolve(__dirname, '..');
const isProduction = process.env.NODE_ENV === 'production';
const scriptName = `[name]${isProduction ? '-[contenthash]' : ''}.js`;
const styleName = `style${isProduction ? '-[contenthash:hex:20]' : ''}.css`;
const maximumFileSizeToCacheInBytes = 10 * 1024 * 1024;

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: scriptName,
        path: `${basePath}/build`,
    },
    stats: 'minimal',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        cssLoader('scss'),
                        postCssLoader,
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        cssLoader('css'),
                        postCssLoader,
                    ],
                }),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: imgLoader,
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({ filename: styleName }),
        new HtmlWebpackPlugin({
            template: 'src/template.ejs',
        }),
        new CleanWebpackPlugin(
            'build',
            { root: basePath },
        ),
        new WorkboxPlugin.GenerateSW({
            cleanupOutdatedCaches: true,
            clientsClaim: true,
            skipWaiting: true,
            sourcemap: true,
            maximumFileSizeToCacheInBytes,
        }),
    ],
};
