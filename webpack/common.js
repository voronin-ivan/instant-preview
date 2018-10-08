const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const buildPath = path.resolve(__dirname, '../build');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: buildPath,
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Insta-preview',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(buildPath)
    ]
};
