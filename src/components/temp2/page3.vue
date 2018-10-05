<template>
  <div class="wrapper">
    <div class="page2_frame right">
      <div class="pic page2_pic_up"></div>
    </div>
    <div class="page2_copywriting"></div>
    <div class="page2_frame left">
      <div class="pic page2_pic_down"></div>
    </div>
    <div class="page2_ic_cloud"></div>
  </div>
</template>
<script>
export default {
  name: "template-2-page-3",
  props: ["data"]
};
</script>
<style lang="scss" scoped>
@import "../../common.scss";
.wrapper {
  padding-top: 128 * $vh;
  padding-bottom: 71 * $vh;
  box-sizing: border-box;
  position: relative;
}
.page2_frame {
  width: 702 * $vw;
  height: 490 * $vh;
  padding: 15 * $vh 15 * $vw;
  box-sizing: border-box;
  margin: auto;
  background: url(../../assets/second/page2_frame.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  animation: opacity 2s forwards;
}
.page2_frame.right {
  transform: translateX(100%);
}
.page2_frame.left {
  transform: translateX(-100%);
}
.pic {
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.page2_pic_up {
  background-image: url(../../assets/second/page2_pic_up.png);
}
.page2_pic_down {
  background-image: url(../../assets/second/page2_pic_down.png);
}
.page2_copywriting {
  width: 702 * $vw;
  height: 106 * $vh;
  margin: 27 * $vh auto 22 * $vw auto;
  background: url(../../assets/second/page2_copywriting.png) no-repeat;
  background-size: 100% 100%;
  transform: scale(0);
  animation: zoomIn 2s 0.5s forwards;
}
.page2_ic_cloud {
  width: 240 * $vw;
  height: 156 * $vh;
  position: absolute;
  right: 24 * $vw;
  top: 487 * $vh;
  background: url(../../assets/second/page2_ic_cloud.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(264 * $vw);
  opacity: 0;
  animation: opacity 2s 1s forwards;
}
@keyframes opacity {
  60% {
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
@keyframes zoomIn {
  100% {
    transform: scale(1);
  }
}
</style>
