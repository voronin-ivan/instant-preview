const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePath = path.resolve(__dirname, '..');
const isProduction = process.env.NODE_ENV === 'production';
const bundleName = `bundle${isProduction ? '[contenthash]' : ''}.js`;
const styleName = `style${isProduction ? '[contenthash:hex:20]' : ''}.css`;

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: bundleName,
        path: `${basePath}/build`
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
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: styleName }),
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new CleanWebpackPlugin(
            'build',
            { root: basePath }
        )
    ]
};
