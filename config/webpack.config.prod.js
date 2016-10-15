const defaultConfig = require('./webpack.common');
var path = require('path')
var paths = require('./paths')

const prodConfig = Object.assign({}, defaultConfig, {
  entry: [
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index'),
    path.join(paths.appStylesheets, 'base'),
  ]
});

module.exports = prodConfig;
