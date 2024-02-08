const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  devServer:{
    port: 8080,
    proxy:{
      '/demo':{
        target:'http://localhost:3003',
        changeOrigin:true
      }
    }
  }
})
