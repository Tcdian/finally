const path = require('path');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader']
            }
        ]
    },
    optimization: {
        usedExports: true
    },
    plugins: [new CleanWebpackPlugin()]
});
