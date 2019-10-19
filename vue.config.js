const path = require('path')

const resolve = dir => path.join(__dirname, dir)

// const BASE_URL = process.env.NODE_ENV === 'production' ? '/mall' : '/'

module.exports = {
  // baseUrl: BASE_URL,
  // publicPath: './',
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  productionSourceMap: false
}
