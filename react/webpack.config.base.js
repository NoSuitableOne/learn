const webpack = require('webpack'),
      path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, '/src/main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }

};