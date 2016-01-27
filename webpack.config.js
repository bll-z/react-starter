'use strict'

const webpack = require('webpack');
const path = require('path');
const resolve = path.resolve;

const dist = resolve('.', 'dist');
const assetIndex = resolve('.', 'static');

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [assetIndex]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: dist,
    filename: 'app.js',
    publicPath: 'http://localhost:8080/dev'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },

      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },

      // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need something
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        exclude: /node_modules/,
        include: assetIndex,
        loader: 'babel?cacheDirectory'
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff" 
      },
      
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      }

    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
