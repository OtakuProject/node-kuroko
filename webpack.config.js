const path = require('path')
const webpack = require('webpack')

const config = {
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  stats: {
    // Ignore warnings due to yarg's dynamic module loading
    warningsFilter: [/node_modules\/yargs/]
  },
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })
  ]
}

if (process.env.NODE_ENV === 'production') {
  /** Production configurations */
  config.optimization = {
    minimize: true
  }
}

if (process.env.NODE_ENV === 'development') {
  /** Development configurations */
}

module.exports = config
