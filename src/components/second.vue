<template>
  <div class="second animate" ref="idx">
    <img src="../assets/page2_lovestory.png" alt="">
    <span
      :style="`background: url(${img1}) no-repeat;backgroundSize: contain;`"
      :class="{'from-top': isCurrent}">
    </span>
    <span
      :style="`background: url(${img2}) no-repeat;backgroundSize: contain;`"
      :class="{'from-right': isCurrent, 'delay2': isCurrent}">
    </span>
    <span
      :style="`background: url(${img3}) no-repeat;backgroundSize: contain;`"
      :class="{'from-left': isCurrent, 'delay2': isCurrent}">
    </span>
  </div>
</template>

<script>
export default {
  name: "second",
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
      // img3: this.con.goodsImg[2],
      img1: require("../assets/page2_bg_up.png"),
      img2: require("../assets/page2_bg_down_left.png"),
      img3: require("../assets/page2_bg_down_right.png")
    };
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

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
