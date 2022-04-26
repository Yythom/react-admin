const path = require('path');
const WebpackBar = require('webpackbar');
// const CracoAlias = require("craco-alias");
// const { addBeforeLoader, loaderByName } = require("@craco/craco");
// const resolve = dir => path.resolve(__dirname, dir);
module.exports = (arvg) => {
    return {
        webpack: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            plugins: [
                new WebpackBar(),
            ],
        },
    }
}