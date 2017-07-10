var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var chunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var webpackChunkHash = require('webpack-chunk-hash');
var extractTextPlugin = require('extract-text-webpack-plugin');

var commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['manifest'],
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpackChunkHash(),
    new chunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true
    }),
    new extractTextPlugin('[name].css')
  ]
})
