<template>
  <div class="guide animate" ref="`section${idx}`">
    <span :class="{'guide-bg': true, 'to-show-2': isCurrent}">
      <div :class="{'guide-bg-white': true, 'from-bottomCenter': isCurrent}">
        <img src="../../assets/location_welcome.png" :class="{'from-topG': isCurrent, 'delayP5': isCurrent}" alt="">
        <img src="../../assets/location.jpg" :class="{'scale21': isCurrent, 'delayP15': isCurrent}" alt="">
        <div :class="{'scale01': isCurrent, 'delay2': isCurrent}">{{ con.extra.address}}</div>
        <div :class="{'scale01': isCurrent, 'delayP25': isCurrent}">{{ con.extra.time }}</div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "guide1",
  props: ["idx", "con", "currentPage"],
  watch: {
    currentPage(newV) {
      this.isCurrent = newV === this.idx;
    }
  },
  data() {
    return {
      isCurrent: false
    };
  },
  created() {}
};
</script>

<style lang="scss" type="text/css">
@import "../../common.scss";
.guide {
  position: relative;
  width: 100%;
  height: 100%;
  &-bg {
    width: 100%;
    position: relative;
    height: 100%;
    display: inline-block;
    background: url("../../assets/location_bg.png") no-repeat;
    background-size: 100%;
    &-white {
      color: #8eb559;
      font-size: 36 * $px;
      width: 702 * $px;
      height: 862 * $px;
      background: #fff;
      position: absolute;
      top: 1000px;
      left: 50%;
      margin-left: -351 * $px;
      margin-top: -431 * $px;
      img:nth-of-type(1) {
        position: relative;
        top: -1000px;
        width: 100%;
        height: 250 * $px;
      }
      img:nth-of-type(2) {
        opacity: 0;
        width: 582 * $px;
      }
      div:nth-of-type(1) {
        opacity: 0;
        margin: 23 * $px auto;
        width: 582 * $px;
      }
      div:nth-of-type(2) {
        opacity: 0;
        margin: 0 auto;
      }
    }
  }
}
.guide .delayP5 {
  -moz-animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.guide .delayP15 {
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.guide .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.guide .delayP25 {
  -moz-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}

.from-bottomCenter {
  -webkit-animation: fBtmCen 2s forwards;
  -moz-animation: fBtmCen 2s forwards;
  animation: fBtmCen 2s forwards;
}
@-moz-keyframes fBtmCen {
  0% {
    top: 1000px;
    opacity: 0;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
}
@-webkit-keyframes fBtmCen {
  0% {
    top: 1000px;
    opacity: 0;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
}
@keyframes fBtmCen {
  0% {
    top: 1000px;
    opacity: 0;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
}

.from-topG {
  -webkit-animation: fromTG 2s forwards;
  -moz-animation: fromTG 2s forwards;
  animation: fromTG 2s forwards;
}
@-moz-keyframes fromTG {
  0% {
    top: -1000px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
@-webkit-keyframes fromTG {
  0% {
    top: -1000px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
@keyframes fromTG {
  0% {
    top: -1000px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
</style>
