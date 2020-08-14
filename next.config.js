const withplugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withReactSvg = require('next-react-svg');
const withImages = require('next-images');

const path = require('path');

module.exports = withplugins([
    withCss({}), withImages({}), withReactSvg({
        include: path.dirname(__dirname, './public/images'),
        webpack(config, options) {
            return config;
        },
    })
]);