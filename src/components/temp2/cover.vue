<template>
  <div class="wrapper">
    <div class="cover_frame_line">
      <div class="cover_copywrite_wemarried"></div>
      <div class="cover_frame_tiny">
        <div class="cover_pic" :style="{'background-image': `url(${cover})`}"></div>
      </div>
      <div class="extra">
        <div class="role">
          <span>{{ extra.groom }}</span>
          <i class="heart"></i>
          <span>{{ extra.bride }}</span>
        </div>
        <div class="time">{{ extra.time }}</div>
        <div class="address">{{ extra.address }}</div>
      </div>
    </div>
    <div class="cover_cloud_left"></div>
    <div class="cover_cloud_right"></div>
    <div class="cover_cloud_middle"></div>
    <div class="up-arrow"></div>
  </div>
</template>
<script>
export default {
  name: "template-2-cover",
  props: ["info"],
  mounted() {
    console.log(this.info);
  },
  computed: {
    extra() {
      return JSON.parse(this.info.extra);
    },
    cover() {
      console.log("cover:", this.info.goodsImg[0]);
      return this.info.goodsImg[0];
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../common.scss";
/* @import '../../animate.scss'; */

.wrapper {
  height: 100%;
  padding: 20 * $vh 24 * $vw 120 * $vw 24 * $vh;
  box-sizing: border-box;
  position: relative;
}
.cover_frame_line {
  height: 1174 * $vh;
  margin: auto;
  box-sizing: border-box;
  padding-top: 124 * $vh;
  padding-bottom: 36 * $vh;
  background: url(../../assets/second/cover_frame_line.png) no-repeat;
  background-size: 100% 100%;
  animation: zoomIn 2s;
}
.cover_copywrite_wemarried {
  width: 600 * $vw;
  height: 116 * $vh;
  margin: auto;
  background: url(../../assets/second/cover_copywrite_wemarried.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  transform: translateY(-164px);
  animation: opacity 2s 0.5s forwards;
}
.cover_frame_tiny {
  width: 522 * $vw;
  height: 620 * $vh;
  margin: 36 * $vh auto auto auto;
  padding: 20 * $vh 21 * $vw;
  background: url(../../assets/second/cover_frame_tiny.png) no-repeat;
  background-size: 100% 100%;
  transform: scale(0);
  animation: zoomIn 2s 1s forwards;
}
.cover_pic {
  height: 100%;
  background: url(../../assets/second/cover_pic.png) no-repeat;
  background-size: 100% 100%;
}
.cover_cloud_right {
  height: 170 * $vh;
  width: 260 * $vw;
  position: absolute;
  top: 420 * $vh;
  right: -260 * $vw;
  background: url(../../assets/second/cover_cloud_right.png) no-repeat;
  background-size: 100% 100%;
  animation: right-to-left 2s 2s forwards;
}
.cover_cloud_left {
  height: 196 * $vh;
  width: 300 * $vw;
  position: absolute;
  top: 680 * $vh;
  left: -300 * $vw;
  background: url(../../assets/second/cover_cloud_left.png) no-repeat;
  background-size: 100% 100%;
  animation: left-to-right 2s 1.5s forwards;
}
.cover_cloud_middle {
  height: 80 * $vh;
  width: 130 * $vw;
  position: absolute;
  top: 876 * $vh;
  right: -130 * $vw;
  background: url(../../assets/second/cover_cloud_left.png) no-repeat;
  background-size: 100% 100%;
  animation: right-to-middle 2s 2.5s forwards;
}
.extra {
  width: 520 * $vw;
  margin: auto;
  color: #e6bf72;
  text-align: center;
  font-size: 30 * $vh;
  line-height: 36 * $vh;
}
.role {
  font-size: 48 * $vh;
  line-height: 48 * $vh;
  margin-top: 35 * $vh;
  opacity: 0;
  transform: translateY(48 * $vh);
  animation: opacity 2s 2s forwards;
}
.heart {
  display: inline-block;
  width: 48 * $vw;
  height: 48 * $vh;
  margin: auto 46 * $vw;
  vertical-align: middle;
  background: url(../../assets/second/cover_ic_heart.png) no-repeat;
  background-size: 100% 100%;
}
.time {
  margin-bottom: 10 * $vh;
  opacity: 0;
  transform: translateY(36 * $vh);
  animation: opacity 2s 2.5s forwards;
}
.address {
  opacity: 0;
  transform: translateY(36 * $vh);
  animation: opacity 2s 3s forwards;
}
.up-arrow {
  position: absolute;
  width: 48 * $vw;
  height: 48 * $vh;
  bottom: 120 * $vh;
  left: 351 * $vw;
  margin: auto;
  vertical-align: middle;
  background: url(../../assets/second/invitetion_ic_arrow_down.png) no-repeat;
  background-size: 100% 100%;
  animation: up-down 1s ease-in-out infinite alternate;
}
@keyframes up-down {
  0% {
    transform: translateY(-24 * $vh);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes opacity {
  100% {
    transform: none;
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes left-to-right {
  100% {
    opacity: 1;
    left: 24 * $vw;
  }
}
@keyframes right-to-left {
  100% {
    opacity: 1;
    right: 24 * $vw;
  }
}
@keyframes right-to-middle {
  100% {
    opacity: 1;
    right: 181 * $vw;
  }
}
</style>
