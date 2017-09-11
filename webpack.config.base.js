const Webpack = require('webpack'),
      Path = require('path');

module.exports = {
    entry: {
        app: __dirname + 'src/main.js'
    },
    output: {
        filename: '[name]bundle.js',
        path:  Path.resolve(__dirname, 'dist')
    },
    // devServer: {
    //     contentBase: '/dist',
    //     inline: true,
    //     port: 30000
    // },
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
            }
        ]
    }

};