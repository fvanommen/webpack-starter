const Webpack = require('webpack')
const WebpackMerge = require('webpack-merge');
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const WebpackCommon = require('./common.config');

module.exports = WebpackMerge(WebpackCommon, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyWebpackPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true
    })
  ]
});
