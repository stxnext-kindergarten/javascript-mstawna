var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),
  ]
}
