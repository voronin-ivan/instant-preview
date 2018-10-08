const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        port: 8000
    },
    // devtool: 'eval-source-map',
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
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js']
    }
};
