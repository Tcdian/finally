const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
};
