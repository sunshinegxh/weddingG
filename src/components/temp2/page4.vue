<template>
  <div class="wrapper">
    <div class="page3_pic_up"></div>
    <div class="page3_ic_cloud"></div>
    <div>
      <div class="text">
        我的肩膀很窄
        <br />
        只够你一人依靠
        <br />
        我的心很小
        <br />
        只能容下你一下
        <br />
        我的手不大
        <br />
        只能刚好握住你的手
        <br />
        我脾气不好
        <br />
        却能对你温柔以待
      </div>
      <div class="page3_pic_down"></div>
    </div>
    <div class="page1_cloud_gold"></div>
  </div>
</template>
<script>
export default {
  name: "template-2-page-4"
};
</script>
<style lang="scss" scoped>
@import "../../common.scss";
.wrapper {
  position: relative;
  padding-top: 176 * $vh;
  padding-bottom: 112 * $vh;
  box-sizing: border-box;
}
.page3_pic_up {
  width: 702 * $vw;
  height: 480 * $vh;
  margin: 0 auto 48 * $vh auto;
  background: url(../../assets/second/page3_pic_up.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(-100%);
  opacity: 0;
  animation: move-opacity 2s forwards;
}
.page3_ic_cloud {
  position: absolute;
  top: 534 * $vh;
  right: 24 * $vw;
  width: 260 * $vw;
  height: 170 * $vh;
  background: url(../../assets/second/page3_ic_cloud.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(100%);
  opacity: 0;
  animation: move-opacity 2s 1.5s forwards;
}
.text {
  display: inline-block;
  vertical-align: top;
  width: 330 * $vw;
  margin-right: 47 * $vw;
  color: #e6bf72;
  font-size: 36 * $vh;
  line-height: 60 * $vh;
  text-align: left;
  opacity: 0;
  animation: opacity 2s 2s forwards;
}
.page3_pic_down {
  display: inline-block;
  width: 332 * $vw;
  height: 518 * $vh;
  background: url(../../assets/second/page3_pic_down.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(100%);
  opacity: 0;
  animation: move-opacity 2s 0.5s forwards;
}
.page1_cloud_gold {
  position: absolute;
  width: 140 * $vw;
  height: 70 * $vh;
  bottom: 112 * $vh;
  left: 288 * $vw;
  background: url(../../assets/second/page1_cloud_gold.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(-428 * $vw);
  opacity: 0;
  animation: move-opacity 2s 2s forwards;
}
@keyframes opacity {
  100% {
    opacity: 1;
  }
}
@keyframes move-opacity {
  60% {
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
</style>
