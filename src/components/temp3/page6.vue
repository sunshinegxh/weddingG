<template>
  <div class="wrapper">
    <span class="border-bg wrapper-bg-left from-left0"></span>
    <span class="border-bg wrapper-bg-bottom from-bottom0"></span>
    <span class="border-bg wrapper-bg-right from-right0"></span>
    <span class="border-bg wrapper-bg-top from-top0"></span>
   
    <div class="page5_main">
        <div class="welcome"></div>
        <div class="address">
          <div class="address-info">
            <p class="time">{{ extra.time }}</p>
            <p class="text">{{ extra.address }}</p>
          </div>
        </div>
        <div class="map" :style="{'background-image': `url(${imgArr[1]})`}"></div>
        <img class="location_pic_down" src="../../assets/third/page5_location_pic_down.png" alt="">
    </div>
    <!-- <div class="invite_ic_pic11" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-3-page-6",
  props: ["info"],
  data() {
    return {
      extra: JSON.parse(this.info.extra),
      imgArr: this.info.goodsImg
    };
  },
  computed: {
    ...mapState({
      cardId: state => state.cardId,
      edit: state => state.edit
    })
  },
  methods: {
    changeUrl(info) {
      this.$set(this.imgArr, info.index - 1, info.url);
    }
  },
  components: {
    uploadImage
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";
.wrapper {
  height: 100%;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .border-bg {
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &-bg-left {
    left: 0;
    top: 0;
    width: 340 * $vw;
    height: 1206 * $vh;
    display: inline-block;
    background: url("../../assets/third/cover_pic_left.png") no-repeat;
  }
  &-bg-right {
    right: 0;
    top: 70 * $vh;
    width: 230 * $vw;
    height: 1178 * $vh;
    background: url("../../assets/third/cover_pic_right.png") no-repeat;
  }
  &-bg-top {
    top: 0;
    right: 0;
    width: 400 * $vw;
    height: 200 * $vh;
    background: url("../../assets/third/cover_pic_up.png") no-repeat;
  }
  &-bg-bottom {
    bottom: 0;
    left: 0;
    width: 750 * $vw;
    height: 228 * $vh;
    background: url("../../assets/third/cover_pic_down.png") no-repeat;
  }
}
.page5_main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 702 * $vw;
  height: 1072 * $vh;
  border: 2 * $vw solid #fff;
  z-index: 3;
  background: url("../../assets/third/cover_bg.png") no-repeat;
  background-size: contain;
}
.page5_main_inside {
  position: relative;
  width: 630 * $vw;
  height: 1000 * $vh;
  background-color: #fff;
}
.address {
  box-sizing: border-box;
  background: #ffffff;
  top: 250 * $vh;
  position: absolute;
  animation: oPC 5s forwards;
  z-index: 10;
  opacity: 0;
}
.welcome {
  position: absolute;
  top: 40 * $vh;
  width: 702 * $vw;
  height: 250 * $vh;
  margin-top: 50 * $vh;
  background: url(../../assets/third/page5_pic_location_welcome.png) no-repeat;
  background-size: cover;
  z-index: 20;
  opacity: 0;
  transform: translateY(-100 * $vh);
  animation: move-opacity 2s 0.5s forwards;
}
.address-info {
  width: 582 * $vw;
  margin: auto;
}
.map {
  width: 520 * $vw;
  height: 318 * $vh;
  position: absolute;
  // background: url(../../assets/second/location.jpg) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 20;
  animation: map 2s forwards;
}
.location_pic_down {
  position: absolute;
  left: 50%;
  z-index: 9;
  top: 770 * $vh;
  transform: translate(-50%, 0);
  width: 702 * $vw;
  height: 230 * $vh;
  margin-top: 50 * $vh;
}
.text,
.time {
  font-family: PingFangSC-Regular;
  font-size: 36 * $vh;
  color: #000;
  text-align: center;
}
.text {
  margin-top: 25 * $vh;
  margin-bottom: 12 * $vh;
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
    top: 900 * $vh;
    opacity: 0;
  }
  100% {
    top: 500 * $vh;
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

.from-top0 {
  animation: fTop0 2s forwards;
}
@keyframes fTop0 {
  0% {
    top: -300 * $vh;
    opacity: 0;
  }
  100% {
    top: 0 * $vh;
    opacity: 0.8;
  }
}

.from-bottom0 {
  animation: fBtm0 2s forwards;
}
@keyframes fBtm0 {
  0% {
    bottom: -300 * $vh;
    opacity: 0;
  }
  100% {
    bottom: 0 * $vh;
    opacity: 0.8;
  }
}

.from-right0 {
  animation: fRht0 2s ease forwards;
}
@keyframes fRht0 {
  0% {
    right: -300 * $vw;
    opacity: 0;
  }
  100% {
    right: 0 * $vw;
    opacity: 1;
  }
}

.from-left0 {
  -webkit-animation: flft0 2s ease forwards;
  -moz-animation: fLft0 2s ease forwards;
  animation: fLft0 2s ease forwards;
}
@keyframes fLft0 {
  0% {
    left: -300 * $vw;
    opacity: 0;
  }
  100% {
    left: 0 * $vw;
    opacity: 1;
  }
}

.from-oPC {
  animation: oPC 2s ease-out forwards;
}
@keyframes oPC {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.invite_ic_pic11 {
  position: fixed;
  top: 100 * $vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}
</style>
