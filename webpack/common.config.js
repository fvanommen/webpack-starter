const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const assetsFolder = 'dist';

// the clean options to use
let cleanOptions = {
	verbose: true,
	dry: false
}

module.exports = {
  entry: { main: './src/webpack.bootstrap.js' },
  output: {
    path: path.resolve(assetsFolder),
    filename: 'js/main.js'
  },
  devtool: 'source-map',
  cache: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
		use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader?sourceMap', 'sass-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(assetsFolder, cleanOptions),
    new CopyWebpackPlugin([
        {from:'src/img',to:'img'},
        {from:'src/fonts',to:'fonts'}
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
	})
  ]
};