<template>
  <div class="forth">
    <div class="invite_ic_pic1" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="invite_ic_pic2" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="invite_ic_pic3" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="3" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="invite_ic_pic4" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="4" v-on:change-url="changeUrl"></upload-image>
    </div>
    <span
      :style="`backgroundImage: url(${imgArr[0]})`"
      class="from-right delay">
    </span>
    <span
      :style="`backgroundImage: url(${imgArr[1]})`"
      class="to-show-2 delay3">
    </span>
    <span
      :style="`backgroundImage: url(${imgArr[2]})`"
      class="to-show-2 delay3">
    </span>
    <span
      :style="`backgroundImage: url(${imgArr[3]})`"
      class="from-left delayP5">
    </span>
    <img
      src="../../assets/page4_marry you.png"
      class="from-bottom200 delay1"
      alt="">
    <img
      src="../../assets/page4_lovestory.png"
      class="from-left24 delayP15"
      alt="">
  </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "forth1",
  props: ["info"],
  data() {
    return {
      imgArr: this.info.goodsImg
      // img1: require("../../assets/page4_bg_up_left.png"),
      // img2: require("../../assets/page4_bg_up_right.png"),
      // img3: require("../../assets/page4_bg_down_left.png"),
      // img4: require("../../assets/page4_bg_down_right.png")
    };
  },
  computed: {
    ...mapState({
      edit: state => state.edit,
      cardId: state => state.cardId
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

.forth {
  position: relative;
  width: 100%;
  height: 100vh;
  font-size: 0;
  span {
    display: inline-block;
    width: 50%;
    height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
  span:nth-of-type(1) {
    transform: translateX(100%);
  }
  span:nth-of-type(2),
  span:nth-of-type(3) {
    opacity: 0;
  }
  span:nth-of-type(4) {
    opacity: 0;
    transform: translateX(-100%);
  }
  img:nth-of-type(1) {
    width: 180 * $vw;
    position: absolute;
    left: 24 * $vw;
    top: 1200 * $vh;
  }
  img:nth-of-type(2) {
    width: 318 * $vw;
    position: absolute;
    right: -2400 * $vw;
    bottom: 120 * $vh;
    opacity: 0;
  }
  .invite_ic_pic1 {
    position: absolute;
    top: 224 * $vh;
    left: 25%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic2 {
    position: absolute;
    top: 224 * $vh;
    left: 75%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic3 {
    position: absolute;
    top: 1000 * $vh;
    left: 25%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic4 {
    position: absolute;
    top: 1000 * $vh;
    left: 75%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
}
.forth .delayP5 {
  -moz-animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.forth .delay1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.forth .delayP15 {
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.forth .delay3 {
  -moz-animation-delay: 3s;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.from-bottom200 {
  -webkit-animation: fBtm200 2s forwards;
  -moz-animation: fBtm200 2s forwards;
  animation: fBtm200 2s forwards;
}
@-moz-keyframes fBtm200 {
  0% {
    top: 1200 * $vh;
    opacity: 0;
  }
  100% {
    top: 200 * $vh;
    opacity: 1;
  }
}
@-webkit-keyframes fBtm200 {
  0% {
    top: 1200 * $vh;
    opacity: 0;
  }
  100% {
    top: 200 * $vh;
    opacity: 1;
  }
}
@keyframes fBtm200 {
  0% {
    top: 1200 * $vh;
    opacity: 0;
  }
  100% {
    top: 200 * $vh;
    opacity: 1;
  }
}
.from-left24 {
  -webkit-animation: fLeft24 2s forwards;
  -moz-animation: fLeft24 2s forwards;
  animation: fLeft24 2s forwards;
}
@keyframes fLeft24 {
  0% {
    right: -2400 * $vw;
    opacity: 0;
  }
  100% {
    right: 24 * $vw;
    opacity: 1;
  }
}
</style>
