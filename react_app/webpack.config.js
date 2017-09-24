var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [ "faker", "lodash", "react", "react-dom", "react-input-range",
  "react-redux", "react-router", "redux", "redux-form", "redux-thunk"];

module.exports = {

  entry: {
    bundle: './src/index.js',
    // extract vendor libraries
    vendor: VENDOR_LIBS
  },

  // configure output files
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [{
      //
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      use: ['style-loader', 'css-loader'],
      test: /\.css$/
    }]
  },

  plugins: [
      // extract common chunks
      new webpack.optimize.CommonsChunkPlugin({
        names: [ 'vendor', 'manifest' ]
      }),
      // generate HTML file during the build process
      new HtmlWebpackPlugin({
          template: 'src/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
      })
  ]

};
