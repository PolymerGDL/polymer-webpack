const config = require('./webpack.config')

config.devServer = {
  compress: true,
  port: 8000,
  open: true,
  watchOptions: {
    ignored: /node_modules/
  }
}

module.exports = config
