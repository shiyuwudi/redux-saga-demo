const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    proxy: {
      '/users.htm': 'http://192.168.1.198:3001'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ],
  },
};