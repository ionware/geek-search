const webpack = require('webpack');
const path = require('path');

const config = {
    //context: path.resolve(__dirname, '/src'),
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'app.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { module: false }],
                        'react'
                    ]
                }
            }]
        }]
    },


}

module.exports = config;