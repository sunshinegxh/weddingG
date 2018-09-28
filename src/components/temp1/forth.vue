<template>
  <div class="forth animate" ref="idx">
    <span
      :style="`background: url(${img1}) no-repeat;backgroundSize: cover`"
      :class="{'from-right': isCurrent, 'delay': isCurrent}">
    </span>
    <span
      :style="`background: url(${img2}) no-repeat;backgroundSize: cover`"
      :class="{'to-show-2': isCurrent, 'delay3': isCurrent}">
    </span>
    <span
      :style="`background: url(${img3}) no-repeat;backgroundSize: cover`"
      :class="{'to-show-2': isCurrent, 'delay3': isCurrent}">
    </span>
    <span
      :style="`background: url(${img4}) no-repeat;backgroundSize: cover`"
      :class="{'from-left': isCurrent, 'delayP5': isCurrent}">
    </span>
    <img
      src="../../assets/page4_marry you.png"
      :class="{'from-bottom200': isCurrent, 'delay1': isCurrent}"
      alt="">
    <img
      src="../../assets/page4_lovestory.png"
      :class="{'from-left24': isCurrent, 'delayP15': isCurrent}"
      alt="">
  </div>
</template>

<script>
export default {
  name: "forth1",
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
      // img4: this.con.goodsImg[3],
      img1: require("../../assets/page4_bg_up_left.png"),
      img2: require("../../assets/page4_bg_up_right.png"),
      img3: require("../../assets/page4_bg_down_left.png"),
      img4: require("../../assets/page4_bg_down_right.png")
    };
  }
};
</script>

<style lang="scss" type="text/css">
@import "../../common.scss";

.forth {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 0;
  span {
    display: inline-block;
    width: 50%;
    height: 50vh;
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
    width: 180 * $px;
    position: absolute;
    left: 24 * $px;
    top: 1200 * $px;
  }
  img:nth-of-type(2) {
    width: 318 * $px;
    position: absolute;
    right: -2400 * $px;
    bottom: 120 * $px;
    opacity: 0;
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
    top: 1200 * $px;
    opacity: 0;
  }
  100% {
    top: 200 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fBtm200 {
  0% {
    top: 1200 * $px;
    opacity: 0;
  }
  100% {
    top: 200 * $px;
    opacity: 1;
  }
}
@keyframes fBtm200 {
  0% {
    top: 1200 * $px;
    opacity: 0;
  }
  100% {
    top: 200 * $px;
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
    right: -2400 * $px;
    opacity: 0;
  }
  100% {
    right: 24 * $px;
    opacity: 1;
  }
}
</style>
