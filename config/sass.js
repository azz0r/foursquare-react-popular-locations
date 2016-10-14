var paths = require('./paths');

var sassLoaders = [
  'css',
  'postcss',
  'sass?indentedSyntax=sass&includePaths[]=' + paths.appSrc
]

// after eject: we're in ./config/
module.exports = sassLoaders
