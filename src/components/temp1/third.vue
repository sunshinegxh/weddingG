<template>
  <div class="third animate" ref="idx">
    <span
      :style="`background: url(${img1}) no-repeat;backgroundSize: cover;`"
      :class="{'from-right': isCurrent, 'delay1': isCurrent}">
    </span>
    <span
      :style="`background: url(${img2}) no-repeat;backgroundSize: contain;`"
      :class="{'from-left': isCurrent, 'delay2': isCurrent}">
    </span>
    <p :class="{'from-right48': isCurrent, 'delay4': isCurrent}">5 / 20</p>
    <img :class="{'from-left100': isCurrent, 'delay4': isCurrent}" src="../../assets/page3_sweetday.png" alt="">
    <img :class="{'from-right48': isCurrent, 'delay3': isCurrent}" src="../../assets/page3_marryyou.png" alt="">
  </div>
</template>

<script>
export default {
  name: "third",
  props: ["idx", "con", "currentPage"],
  watch: {
    currentPage(newV) {
      this.isCurrent = newV === this.idx;
    }
  },
  data() {
    return {
      isCurrent: false,
      // img1: this.con.goodsImg[0],
      // img2: this.con.goodsImg[1],
      img1: require("../../assets/page4_bg_up_left.png"),
      img2: require("../../assets/page4_bg_down_right.png")
    };
  }
};
</script>

<style lang="scss" type="text/css">
@import "../../common.scss";

.third {
  position: relative;
  width: 100%;
  height: 100%;
  span {
    display: inline-block;
    width: 100%;
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
    right: -1000px;
    height: 40 * $px;
    bottom: 220 * $px;
  }
  img:nth-of-type(2) {
    // transform: translateX(-100%);
    position: absolute;
    left: -1000px;
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
    left: -1000px;
    opacity: 0;
  }
  100% {
    left: 24 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fRht48 {
  0% {
    left: -1000px;
    opacity: 0;
  }
  100% {
    left: 24 * $px;
    opacity: 1;
  }
}
@keyframes fRht48 {
  0% {
    left: -1000px;
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
    right: -1000px;
    opacity: 0;
  }
  100% {
    right: 100 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fleft100 {
  0% {
    right: -1000px;
    opacity: 0;
  }
  100% {
    right: 100 * $px;
    opacity: 1;
  }
}
@keyframes fleft100 {
  0% {
    right: -1000px;
    opacity: 0;
  }
  100% {
    right: 100 * $px;
    opacity: 1;
  }
}
</style>
