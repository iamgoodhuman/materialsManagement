const { defineConfig } = require('@vue/cli-service')
module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
  devServer: {
    port: 8080,
    proxy: {
      '/demo': {
        target: 'http://localhost:3003',
        changeOrigin: true
      }
    }
  }
}
