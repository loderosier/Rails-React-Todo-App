var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['./frontend/js/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass?sourceMap') },
      { test: /\.svg$/, loader: 'url-loader' }  
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
