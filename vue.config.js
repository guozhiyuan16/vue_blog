const path = require('path');

function resolve(dir){
    return path.resolve(__dirname,dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
          .set('@', resolve('src'))
          .set('views', resolve('src/views'))
          .set('components', resolve('src/components'))
          .set('assets', resolve('src/assets'))
          .set('utils', resolve('src/utils'))
          .set('api', resolve('src/api'))
          .set('store', resolve('src/store'))
          .set('router', resolve('src/router'))
      }
}