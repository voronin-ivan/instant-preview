module.exports = function(type) {
    const loader = {
        loader: 'css-loader',
    };

    if (type === 'scss') {
        loader.options = {
            sourceMap: true,
        };
    }

    if (type === 'css') {
        loader.options = {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:8]',
        };
    }

    return loader;
}
