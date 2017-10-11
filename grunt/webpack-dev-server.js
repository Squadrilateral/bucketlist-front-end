'use strict'

const webpack = require('webpack')
const clone = require('clone')

// clone the webpack config to separate configuration of webpack and dev server
const webpackConfig = clone(require('./webpack').options)

// port for development server
const port = +('GA'.split('').reduce((p, c) => p + c.charCodeAt(), ''))

// make `jQuery` and `$` available in the development console
webpackConfig.module.rules.push({
  test: require.resolve('jquery'),
  use: [{
    loader: 'expose-loader',
    options: 'jQuery'
  }, {
    loader: 'expose-loader',
    options: '$'
  }]
})

module.exports = {
  options: {
    port,
    inline: true, // reload on change
    webpack: webpackConfig,
    publicPath: '/public/'
  },

  start: {
    webpack: {
      devtool: 'source-map',
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true
        })
      ]
    }
  }
}
