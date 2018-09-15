module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/card/getSystemMusicList.gg": {
        target: "http://47.105.43.207:80/()/banhunli"
      }
    }
  }
};
