var webpack = require('webpack')
var path = require('path')
var paths = require('./paths')
require('./environment')
const defaultConfig = require('./webpack.common')

const devConfig = Object.assign({}, defaultConfig, {
  devtool: "eval-cheap-module-source-map",
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index'),
    path.join(paths.appStylesheets, 'base')
  ],
  watch: true,
  stats: true,
  progress: true,
})

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)
devConfig.module.loaders.push(
  {
    test: /\.scss$/,
    loader: 'style!css!postcss!sass?sourceMap',
  }
)
module.exports = devConfig
