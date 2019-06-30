const cssVariables = require('postcss-css-variables');
const autoprefixer = require('autoprefixer');

module.exports = {
    loader: 'postcss-loader',
    options: {
        plugins: [
            cssVariables({
                preserve: true,
                // fallback for react-toolbox
                variables: {
                    '--color-white': '#fff',
                    '--color-dark-contrast': '#fff',
                    '--palette-grey-900': '#212121',
                    '--palette-grey-200': '#eee',
                    '--palette-grey-600': '#757575',
                    '--palette-indigo-500': '#3f51b5',
                    '--palette-indigo-700': '#303f9f',
                    '--palette-pink-a200': '#ff4081',
                    '--palette-pink-700': '#c2185b',
                },
            }),
            autoprefixer(),
        ],
    },
};
