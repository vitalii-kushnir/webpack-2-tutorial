const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    // configure input file
    entry: "./src/index.js",

    // configure output file
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: 'build/'
    },

    // configure different loaders
    module: {
        rules : [{
            // configure for the JS files
            use: 'babel-loader',
            test: /\.js$/
        }, {
           // configure CSS loader
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader'
            })
        }, {
            // configure image loaders
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options : { limit: 40000 }
            },
            'image-webpack-loader']
        }]
    },

    plugins: [
        // extract CSS to the external file
        new ExtractTextPlugin('style.css')
    ]

};

module.exports = config;