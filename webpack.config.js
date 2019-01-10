const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('Building with WebPack', process.env.NODE_ENV)

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './index.html'),
  filename: './index.html'
})

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  module: {
    rules: [
      
    ]
  },
  plugins: [
    htmlWebpackPlugin,
  ],
  resolve: {
    extensions: ['.js', '.json']
  },
  devServer: {
    port: 3001
  }
}