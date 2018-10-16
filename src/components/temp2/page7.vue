<template>
  <div class="wrapper">
    <div class="bg"></div>
    <div class="welcome"></div>
    <div class="box">
      <custom-form @submit="onSubmit"></custom-form>
    </div>
  </div>
</template>
<script>
import customForm from "../common/customForm";

export default {
  name: "template-2-page-7",
  components: {
    customForm
  },
  methods: {
    onSubmit() {}
  }
};
</script>
<style lang="scss" scoped>
@import "../../common.scss";
.wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
  background: url(../../assets/second/invitation_bg.png) no-repeat;
  background-size: 100% 100%;
}
.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background: url(../../assets/second/barrage_bg.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  animation: opacity 2s forwards;
}
.box {
  width: 702 * $vw;
  height: 862 * $vh;
  margin: 236 * $vh auto 236 * $vh auto;
  padding: 32 * $vh 36 * $vw 48 * $vh 50 * $vw;
  color: #999;
  padding-top: 250 * $vh;
  box-sizing: border-box;
  /* position: relative; */
  z-index: 10;
  opacity: 0;
  background: #ffffff;
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
@keyframes zoomIn {
  100% {
    transform: scale(1);
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
