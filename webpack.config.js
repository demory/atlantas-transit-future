'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.yml$/,
      loader: 'yaml'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
    //   test: /\.csv$/,
    //   loader: 'dsv-loader'
    // }, {
      test: /\.png$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=./assets/img/[hash].[ext]'
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      // test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      // loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=./assets/fonts/[hash].[ext]'
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=./assets/fonts/[hash].[ext]'
    },{
      test: /\.jpg$/,
      loader: 'file-loader'
    }]
  }
}
