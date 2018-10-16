<template>
  <div class="third">
    <div class="invite_ic_pic1" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="invite_ic_pic2" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
    </div>
    <span
      :style="`backgroundImage: url(${imgArr[0]})`"
      class="from-right delay1">
    </span>
    <span
      :style="`backgroundImage: url(${imgArr[1]})`"
      class="from-left delay2">
    </span>
    <p class="from-right48 delay4">5 / 20</p>
    <img class="from-left100 delay4" src="../../assets/page3_sweetday.png" alt="">
    <img class="from-right48 delay3" src="../../assets/page3_marryyou.png" alt="">
  </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "third1",
  props: ["info"],
  computed: {
    ...mapState({
      edit: state => state.edit,
      cardId: state => state.cardId
    })
  },
  data() {
    return {
      // img1: require("../../assets/page4_bg_up_left.png"),
      // img2: require("../../assets/page4_bg_down_right.png"),
      imgArr: this.info.goodsImg
      // imgArr: [
      //   require("../../assets/page3_bg_up.png"),
      //   require("../../assets/page3_bg_down.png")
      // ]
    };
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

.third {
  position: relative;
  width: 100%;
  height: 100vh;
  .invite_ic_pic1 {
    position: absolute;
    top: 224 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic2 {
    position: absolute;
    top: 1000 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  span {
    display: inline-block;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  span:nth-of-type(1) {
    transform: translateX(-100%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 640 * $px, 0% 100%);
    height: 774 * $px;
    float: left;
  }
  span:nth-of-type(2) {
    transform: translateX(100%);
    height: 100%;
    clip-path: polygon(0 134 * $px, 100% 0%, 100% 100%, 0 100%);
    position: relative;
    top: -134 * $px;
  }
  p {
    // transform: translateX(-100%);
    position: absolute;
    left: -1000px;
    bottom: 200 * $px;
    font-size: 64 * $px;
    margin: 0;
  }
  img:nth-of-type(1) {
    // transform: translateX(100%);
    position: absolute;
    right: -1000 * $px;
    height: 40 * $px;
    bottom: 220 * $px;
  }
  img:nth-of-type(2) {
    // transform: translateX(-100%);
    position: absolute;
    left: -1000 * $px;
    height: 96 * $px;
    bottom: 108 * $px;
  }
}
.third .delay1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.third .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.third .delay3 {
  -moz-animation-delay: 3s;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}
.third .delay4 {
  -moz-animation-delay: 4s;
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}
.from-right48 {
  -webkit-animation: fRht48 2s ease forwards;
  -moz-animation: fRht48 2s ease forwards;
  animation: fRht48 2s ease forwards;
}
@-moz-keyframes fRht48 {
  0% {
    left: -1000 * $px;
    opacity: 0;
  }
  100% {
    left: 24 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fRht48 {
  0% {
    left: -1000 * $px;
    opacity: 0;
  }
  100% {
    left: 24 * $px;
    opacity: 1;
  }
}
@keyframes fRht48 {
  0% {
    left: -1000 * $px;
    opacity: 0;
  }
  100% {
    left: 24 * $px;
    opacity: 1;
  }
}

.from-left100 {
  -webkit-animation: fleft100 2s ease forwards;
  -moz-animation: fleft100 2s ease forwards;
  animation: fleft100 2s ease forwards;
}
@-moz-keyframes fleft100 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 100 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fleft100 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 100 * $px;
    opacity: 1;
  }
}
@keyframes fleft100 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 100 * $px;
    opacity: 1;
  }
}
</style>
