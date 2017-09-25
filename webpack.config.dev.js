const webpack = require('webpack'),
      path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, '/src/main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist'),
        //publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        inline: true,
        hot: true,
        port: 32000,
        host: '127.0.0.1',
        https: false,
        open: true,
        compress: true
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
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};