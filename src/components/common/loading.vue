<template>
  <div class="loading">
    <div>
      <div class="loading-icon"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading"
};
</script>
<style lang="scss" scoped>
.loading {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1200;
  background: #000;
  opacity: 0.6;

  div {
    .loading-icon {
      display: block;
      width: 40px;
      height: 40px;
      background-image: url("https://h5.sinaimg.cn/upload/1005/453/2018/05/30/loading.png");
      background-size: contain;
      background-repeat: no-repeat;
      animation: loading_rotate 1s infinite;
    }
  }
}
</style>
