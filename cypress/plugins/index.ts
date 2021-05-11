const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on: Cypress.PluginEvents, config: Cypress.ConfigOptions) => {
    const webpackOptions = {
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    loader: 'ts-loader',
                },
            ],
        },
    };

    addMatchImageSnapshotPlugin(on, config);
    on('file:preprocessor', webpackPreprocessor({ webpackOptions }));

    return config;
};
