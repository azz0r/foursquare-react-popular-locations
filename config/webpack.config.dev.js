const webpack = require('webpack');
var path = require('path')
var paths = require('./paths')

require('./environment');
const defaultConfig = require('./webpack.common');

const devConfig = Object.assign({}, defaultConfig, {
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index'),
    path.join(paths.appStylesheets, 'base')
  ],
});

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);
console.log(devConfig)
module.exports = devConfig;
