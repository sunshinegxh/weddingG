<template>
    <div class="first animate" ref="`section${idx}`">
      <img class="page1_ic_flower" :class="{'from-rTT': isCurrent}" src="../../assets/third/page1_ic_flower.png" alt="">
      <img class="page1_pic_up" :class="{'from-left0': isCurrent}" src="../../assets/third/page1_pic_up.jpg" alt="">
      <img class="page1_copywrite" :class="{'from-oPC': isCurrent}" src="../../assets/third/page1_copywrite.png" alt="">
      <img class="page1_pic_down" :class="{'from-right0': isCurrent}" src="../../assets/third/page1_pic_down.jpg" alt="">
      <img class="page1_ic_vine delay1" :class="{'from-rTT60': isCurrent}" src="../../assets/third/page1_ic_vine.png" alt="">
    </div>
</template>

<script>
export default {
  name: "first3",
  props: ["idx", "con", "currentPage"],
  watch: {
    currentPage(newV) {
      this.isCurrent = newV === this.idx;
    }
  },
  data() {
    return {
      // img1: this.con.goodsImg[0],
      // img2: this.con.goodsImg[1]
      img1: require("../../assets/page1_bg_down.png"),
      img2: require("../../assets/page1_bg_up.png"),
      isCurrent: false
    };
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";

.first {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    display: block;
  }
  .page1_ic_flower {
    margin: 0 auto;
    margin-top: 20 * $px;
    width: 88 * $px;
    height: 88 * $px;
  }
  .page1_pic_up {
    width: 100%;
    position: relative;
  }
  .page1_copywrite,
  .page1_pic_down {
    width: 566 * $px;
    float: right;
    position: relative;
    z-index: 2;
  }
  .page1_ic_vine {
    width: 150 * $px;
    float: right;
    opacity: 0;
    transform-origin: right bottom;
    position: relative;
    z-index: 1;
  }
}

.from-rTT {
  -webkit-animation: rTT 4s ease-out infinite;
  -moz-animation: rTT 4s ease-out infinite;
  animation: rTT 4s ease-out infinite;
}
@-moz-keyframes rTT {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@-webkit-keyframes rTT {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes rTT {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.from-rTT60 {
  -webkit-animation: rTT60 2s ease-out forwards;
  -moz-animation: rTT60 2s ease-out forwards;
  animation: rTT60 2s ease-out forwards;
}
@-moz-keyframes rTT60 {
  0% {
    transform: rotateZ(60deg);
    opacity: 0;
  }
  100% {
    transform: rotateZ(0deg);
    opacity: 1;
  }
}
@-webkit-keyframes rTT60 {
  0% {
    transform: rotateZ(60deg);
    opacity: 0;
  }
  100% {
    transform: rotateZ(0deg);
    opacity: 1;
  }
}
@keyframes rTT60 {
  0% {
    transform: rotateZ(60deg);
    opacity: 0;
  }
  100% {
    transform: rotateZ(0deg);
    opacity: 1;
  }
}

.from-oPC {
  -webkit-animation: oPC 2s ease-out forwards;
  -moz-animation: oPC 2s ease-out forwards;
  animation: oPC 2s ease-out forwards;
}
@-moz-keyframes oPC {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes oPC {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes oPC {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.from-left0 {
  -webkit-animation: flft0 2s ease forwards;
  -moz-animation: fLft0 2s ease forwards;
  animation: fLft0 2s ease forwards;
}
@-moz-keyframes fLft0 {
  0% {
    left: -300 * $px;
    opacity: 0;
  }
  100% {
    left: 0 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fLft0 {
  0% {
    left: -300 * $px;
    opacity: 0;
  }
  100% {
    left: 0 * $px;
    opacity: 1;
  }
}
@keyframes fLft0 {
  0% {
    left: -300 * $px;
    opacity: 0;
  }
  100% {
    left: 0 * $px;
    opacity: 1;
  }
}

.from-right0 {
  -webkit-animation: fRht0 2s ease forwards;
  -moz-animation: fRht0 2s ease forwards;
  animation: fRht0 2s ease forwards;
}
@-moz-keyframes fRht0 {
  0% {
    right: -300 * $px;
    opacity: 0;
  }
  100% {
    right: 0 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fRht0 {
  0% {
    right: -300 * $px;
    opacity: 0;
  }
  100% {
    right: 0 * $px;
    opacity: 1;
  }
}
@keyframes fRht0 {
  0% {
    right: -300 * $px;
    opacity: 0;
  }
  100% {
    right: 0 * $px;
    opacity: 1;
  }
}

.first .delay1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
</style>
