<template>
  <div class="second">
    <div class="invite_ic_pic" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
    <img src="../../assets/page2_lovestory.png" alt="">
    <span
      :style="`backgroundImage: url(${imgSrc[0]})`"
      class="from-top">
    </span>
    <div class="invite_ic_pic" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
    </div>
    <span
      :style="`backgroundImage: url(${imgSrc[1]})`"
      class="from-right delay2">
    </span>
    <div class="invite_ic_pic" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="3" v-on:change-url="changeUrl"></upload-image>
    </div>
    <span
      :style="`backgroundImage: url(${imgSrc[2]})`"
      class="from-left delay2">
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "info1",
  props: ["info"],
  components: {
    uploadImage
  },
  data() {
    return {
      imgSrc: this.info.goodsImg
      // imgSrc: [
      //   require("../../assets/page2_bg_up.png"),
      //   require("../../assets/page2_bg_down_left.png"),
      //   require("../../assets/page2_bg_down_right.png")
      // ]
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
      console.log(info);
      this.$set(this.imgSrc, info.index - 1, info.url);
    }
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";

.second {
  position: relative;
  width: 100%;
  height: 100vh;
  img {
    width: 700 * $vw;
    position: absolute;
    top: 484 * $vh;
    left: 24 * $vw;
    z-index: 1;
  }
  span {
    display: inline-block;
    background-repeat: no-repeat;
  }
  span:nth-of-type(1) {
    transform: translateY(-100%);
    width: 100%;
    height: 640 * $vh;
    float: left;
    background-size: cover;
  }
  span:nth-of-type(2) {
    transform: translateX(-100%);
    width: 50%;
    height: 100%;
    float: left;
    background-size: contain;
  }
  span:nth-of-type(3) {
    transform: translateX(100%);
    width: 50%;
    height: 100%;
    background-size: contain;
  }
  .invite_ic_pic {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    &:first-of-type {
      top: 320 * $vh;
    }
    &:nth-of-type(2) {
      top: 1000 * $vh;
      left: 25%;
    }
    &:nth-of-type(3) {
      top: 1000 * $vh;
      left: 75%;
    }
  }
}
.second .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.from-top {
  -webkit-animation: fromT 2s forwards;
  -moz-animation: fromT 2s forwards;
  animation: fromT 2s forwards;
}
@-moz-keyframes fromT {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes fromT {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fromT {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
