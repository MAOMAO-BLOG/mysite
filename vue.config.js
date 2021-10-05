module.exports = {
  devServer:{
    proxy:{
      '/api':{
        target:"https://www.my-site.com",
      }
    }
  },
  configureWebpack:require('./webpack.config'),
  lintOnSave: true,

}
