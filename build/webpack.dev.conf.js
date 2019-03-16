const path = require('path');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            transpileOnly: true,
                            useCache: true,
                            cacheDirectory: path.resolve(__dirname, '../.cache')
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8524,
        contentBase: path.resolve(__dirname, '../public'),
        hot: true,
        hotOnly: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
