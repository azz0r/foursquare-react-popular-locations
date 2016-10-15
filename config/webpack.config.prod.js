const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const defaultConfig = require('./webpack.common');
var path = require('path')
var paths = require('./paths')

const prodConfig = Object.assign({}, defaultConfig, {
  devtool: false,
  entry: [
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index'),
    path.join(paths.appStylesheets, 'base'),
  ]
});

prodConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    mangle: true,
  })
)

prodConfig.module.loaders.push(
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?sourceMap'),
  }
)

module.exports = prodConfig
