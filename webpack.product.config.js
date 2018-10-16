const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config.js');

const productConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
};

module.exports = merge(baseConfig,productConfig)
