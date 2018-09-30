<template>
  <div class="second animate" ref="idx">
    <div class="invite_ic_pic" v-if="edit">
      <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
    <img src="../../assets/page2_lovestory.png" alt="">
    <span
      :style="`backgroundImage: url(${imgSrc[0]})`"
      :class="{'from-top': isCurrent}">
    </span>
    <div class="invite_ic_pic" v-if="edit">
      <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
    </div>
    <span
      :style="`backgroundImage: url(${imgSrc[1]})`"
      :class="{'from-right': isCurrent, 'delay2': isCurrent}">
    </span>
    <div class="invite_ic_pic" v-if="edit">
      <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="3" v-on:change-url="changeUrl"></upload-image>
    </div>
    <span
      :style="`backgroundImage: url(${imgSrc[2]})`"
      :class="{'from-left': isCurrent, 'delay2': isCurrent}">
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "info1",
  props: ["idx", "con", "currentPage"],
  components: {
    uploadImage
  },
  watch: {
    currentPage(newV) {
      this.isCurrent = newV === this.idx;
    }
  },
  data() {
    return {
      isCurrent: false,
      imgSrc: this.con.goodsImg
      // img1: this.con.goodsImg[0],
      // img2: this.con.goodsImg[1],
      // img3: this.con.goodsImg[2],
      // img1: require("../../assets/page2_bg_up.png"),
      // img2: require("../../assets/page2_bg_down_left.png"),
      // img3: require("../../assets/page2_bg_down_right.png")
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
      // this.imgSrc[info.index-1] = info.url;
      // this.$emit('maiBiz', true)
    }
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";

.second {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 700 * $px;
    position: absolute;
    top: 484 * $px;
    left: 24 * $px;
    z-index: 1;
  }
  span {
    display: inline-block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  span:nth-of-type(1) {
    transform: translateY(-100%);
    width: 100%;
    height: 640 * $px;
    float: left;
  }
  span:nth-of-type(2) {
    transform: translateX(-100%);
    width: 50%;
    height: 100%;
    float: left;
  }
  span:nth-of-type(3) {
    transform: translateX(100%);
    width: 50%;
    height: 100%;
  }
  .invite_ic_pic {
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    &:first-of-type {
      top: 320 * $px;
    }
    &:nth-of-type(2) {
      top: 1000 * $px;
      left: 25%;
    }
    &:nth-of-type(3) {
      top: 1000 * $px;
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
