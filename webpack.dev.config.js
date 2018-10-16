const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config.js');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
};

module.exports = merge(baseConfig,devConfig)
