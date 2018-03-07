const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const HtmlWebpackPluginConfig = {
  template: path.resolve(__dirname, 'src/index.html')
}

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'bower_components')
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /\.*index.html$/,
        use: [
          {
            loader: 'polymer-webpack-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.js'),
      to: 'bower_components/webcomponentsjs/[name].[ext]'
    }])
  ]
}

module.exports = config
