<template>
  <div class="wrapper">
    <div class="bg" :style="{backgroundImage: `url(${cover})`}"></div>
    <div class="welcome"></div>
    <div class="address">
      <div class="address-info">
        <div class="text">{{ extra.address }}</div>
        <div class="time">{{ extra.tome }}</div>
      </div>
    </div>
    <div class="map"></div>
  </div>
</template>
<script>
export default {
  name: "template-2-page-6",
  props: ["info"],
  computed: {
    extra() {
      return JSON.parse(this.info.extra);
    },
    cover() {
      console.log("page6:", this.info.goodsImg);
      return this.info.goodsImg[0];
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../common.scss";
.wrapper {
  height: 100%;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}
.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  animation: opacity 2s forwards;
}
.address {
  width: 702 * $vw;
  height: 862 * $vh;
  margin: 236 * $vh auto 236 * $vh auto;
  padding-top: 606 * $vh;
  box-sizing: border-box;
  background: #ffffff;
  position: relative;
  z-index: 10;
  opacity: 0;
  transform: translateY(514 * $vh);
  animation: move-opacity 2s forwards;
}
.welcome {
  position: absolute;
  height: 250 * $vh;
  top: 236 * $vh;
  left: 24 * $vw;
  right: 24 * $vw;
  background: url(../../assets/second/location_welcome.png) no-repeat;
  background-size: 100% 100%;
  z-index: 20;
  opacity: 0;
  transform: translateY(-306 * $vh);
  animation: move-opacity 2s 0.5s forwards;
}
.address-info {
  width: 582 * $vw;
  margin: auto;
}
.map {
  position: absolute;
  top: 486 * $vh;
  left: 84 * $vw;
  right: 84 * $vw;
  height: 356 * $vh;
  background: url(../../assets/second/location.jpg) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  transform: scale(0);
  z-index: 20;
  animation: map 2s forwards;
}
.text,
.time {
  font-family: PingFangSC-Regular;
  font-size: 36 * $vh;
  color: #000;
  line-height: 48 * $vh;
  text-align: center;
  transform: scale(0);
}
.text {
  margin-top: 47 * $vh;
  margin-bottom: 12 * $vh;
  animation: zoomIn 2s 1s forwards;
}
.time {
  animation: zoomIn 2s 1.5s forwards;
}
@keyframes zoomIn {
  100% {
    transform: scale(1);
  }
}
@keyframes map {
  0% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes opacity {
  100% {
    opacity: 1;
  }
}
@keyframes move-opacity {
  40% {
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
</style>
