<template>
  <div class="wrapper">
    <div class="bg" :style="{backgroundImage: `url(${imgArr[0]})`}"></div>
    <div class="welcome"></div>
    <div class="address">
      <div class="address-info">
        <div class="text">{{ extra.address }}</div>
        <div class="time">{{ extra.time }}</div>
      </div>
    </div>
    <div class="map" :style="{backgroundImage: `url(${imgArr[1]})`}"></div>
    <div class="invite_ic_pic" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-2-page-6",
  props: ["info"],
  data() {
    return {
      imgArr: this.info.goodsImg
    };
  },
  computed: {
    extra() {
      // return this.info.extra;
      return JSON.parse(this.info.extra);
    },
    cover() {
      return this.info.goodsImg[0];
    },
    ...mapState({
      edit: state => state.edit
    })
  },
  components: {
    uploadImage
  },
  methods: {
    changeUrl(info) {
      this.$set(this.imgArr, info.index - 1, info.url);
    }
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
  .invite_ic_pic {
    position: fixed;
    top: 100 * $vh;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
}
.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
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
