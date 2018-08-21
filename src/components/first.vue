<template>
    <div class="first animate" ref="`section${idx}`">
      <span
        :style="`background: url(${img1}) no-repeat;backgroundSize: cover;`"
        :class="{'from-left': isCurrent}">
      </span>
      <div :class="{'scale01': isCurrent, 'delay2': isCurrent}">
        <p v-for="(item, index) in con.desc" :key="index">{{ item }}</p>
      </div>
      <span
        :style="`background: url(${img2}) no-repeat;backgroundSize: cover;`"
        :class="{'from-right': isCurrent}">
      </span>
    </div>
</template>

<script>
export default {
  name: "first",
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
      img1: require("../assets/page1_bg_down.png"),
      img2: require("../assets/page1_bg_up.png"),
      isCurrent: false
    };
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.first {
  position: relative;
  width: 100%;
  height: 100%;
  span {
    display: inline-block;
    width: 100%;
    height: 560 * $px;
    background-size: cover;
  }
  span:nth-of-type(2) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  div {
    width: 428 * $px;
    margin: 50 * $px auto 0;
    font-size: 28 * $px;
    text-align: left;
    color: #222222;
    transform: scale(0);
    p {
      margin: 0;
    }
  }
}
.first .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.from-left {
  -webkit-animation: fromL 2s forwards;
  -moz-animation: fromL 2s forwards;
  animation: fromL 2s forwards;
}
@-moz-keyframes fromL {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes fromL {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fromL {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.from-right {
  -webkit-animation: fromR 2s forwards;
  -moz-animation: fromR 2s forwards;
  animation: fromR 2s forwards;
}
@-moz-keyframes fromR {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes fromR {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fromR {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.scale01 {
  -webkit-animation: scale1 2s forwards;
  -moz-animation: scale1 2s forwards;
  animation: scale1 2s forwards;
}
@-moz-keyframes scale1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes scale1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
