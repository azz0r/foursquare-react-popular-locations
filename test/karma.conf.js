const path = require('path')
const defaultConfig = require('../config/webpack.prod')
const argv = process.argv.slice(2)
const opts = {
  grep: undefined,
}

argv.forEach((arg) => {
  if (/^--grep=/.test(arg)) {
    opts.grep = arg.replace('--grep=', '').trim()
    opts.coverage = false // disable if grepping
  }
})

// Karma configuration
module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: '../',
    browsers: ['PhantomJS'],
    client: {
      mocha: {
        grep: opts.grep,
      },
    },
    colors: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      {
        pattern: 'test/karma.tests.js',
        watched: false,
        served: true,
        included: true,
      },
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
    ],
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,
    port: 9876,
    preprocessors: {
      'test/karma.tests.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    singleRun: false,
    webpack: defaultConfig,
    webpackServer: {
      noInfo: true,
    }
  })
}
