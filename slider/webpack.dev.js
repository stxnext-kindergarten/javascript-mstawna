var webpackNotifierPlugin = require('webpack-notifier');
var merge = require('webpack-merge');

var commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpackNotifierPlugin()
  ]
})
