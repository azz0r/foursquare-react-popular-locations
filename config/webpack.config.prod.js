const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const defaultConfig = require('./webpack.common');
var path = require('path')
var paths = require('./paths')
var sassLoaders = require('./sass')

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
    loaders: sassLoaders,
    loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
  }
)

module.exports = prodConfig
