module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/()": {
        target: "http://47.105.43.207:81/",
        secure: false
      }
    }
  },
  baseUrl: "./"
};
