var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var debug = true;
module.exports = {
  entry: {
    react: ['react', 'react-dom'],
    bundle: './index.js'
    
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: debug ? './githubrank/dist/' : 'http://xx.xx.com/'
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['react', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      chunks: ['react', 'manifest', 'bundle']
    })
  ]
}
;