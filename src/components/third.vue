<template>
  <div class="third animate" ref="idx">
    <span
      :style="`background: url(${img1}) no-repeat;backgroundSize: contain;`"
      :class="{'f': isCurrent}">
    </span>
    <!-- <img :src="img1" alt=""> -->
    <!-- <span
      :style="`background: url(${img2}) no-repeat;backgroundSize: contain;`"
      :class="{'f': isCurrent, 'd': isCurrent}">
    </span> -->
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
      // img1: require("../assets/page3_bg_up.png"),
      img1: require("../assets/page4_bg_up_left.png"),
      img2: require("../assets/page3_bg_down.png")
    };
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.third {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    // position: absolute;
    width: 100%;
    height: 774 * $px;
    // float: left;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  }
  span {
    display: inline-block;
    width: 100%;
  }
  span:nth-of-type(1) {
    // transform: translateX(-100%);
    height: 774 * $px;
    // float: left;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  }
  span:nth-of-type(2) {
    // transform: translateX(100%);
    height: 100%;
    position: relative;
    top: -120 * $px;
  }
}
.second .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
</style>
