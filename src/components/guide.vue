<template>
  <div class="guide animate" ref="`section${idx}`">
    <span class="guide-bg">
      <div class="guide-bg-white">
        <img src="../assets/location_welcome.png" alt="">
        <img src="../assets/map.jpg" alt="">
      </div>
      <!-- <p class="from-right30 delayP15">{{ con.groom }}</p>
      <p class="from-right30 delayP15">＆</p>
      <p class="from-right30 delayP15">{{ con.bride }}</p>
      <span class="from-right30 delay2">{{ con.time }}</span>
      <span class="from-right30 delayP25">{{ con.address}}</span> -->
    </span>
  </div>
</template>

<script>
export default {
  name: "guide",
  props: ["idx", "con"],
  data() {
    return {
      current: 0
    };
  },
  created() {},
  methods: {
    changePage(index) {
      this.$emit("changePage", index);
      // let music = 'jjjj';

      // window.aa = function(params) {
      //   return music
      // }
    },
    comClass() {
      return {
        toRead: true,
        big: this.current === 1
      };
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";
.guide {
  position: relative;
  width: 100%;
  height: 100%;
  &-bg {
    width: 100%;
    position: relative;
    height: 100%;
    display: inline-block;
    background: url("../assets/location_bg.png") no-repeat;
    background-size: 100%;
    &-white {
      width: 95%;
      height: 750 * $px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img:nth-of-type(1) {
        width: 600 * $px;
        // height: 676 * $px;
      }
      img:nth-of-type(2) {
        width: 640 * $px;
        height: 300 * $px;
      }
    }
  }
}
.cover-bg .delayP5 {
  -moz-animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.cover-bg .delay1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.cover-bg .delayP15 {
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.cover-bg .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.cover-bg .delayP25 {
  -moz-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}

.from-bottom60 {
  -webkit-animation: fBtm60 2s forwards;
  -moz-animation: fBtm60 2s forwards;
  animation: fBtm60 2s forwards;
}
@-moz-keyframes fBtm60 {
  0% {
    bottom: -1000px;
    opacity: 0;
  }
  100% {
    bottom: 60px;
    opacity: 0.8;
  }
}
@-webkit-keyframes fBtm60 {
  0% {
    bottom: -1000px;
    opacity: 0;
  }
  100% {
    bottom: 60px;
    opacity: 0.8;
  }
}
@keyframes fBtm60 {
  0% {
    bottom: -1000px;
    opacity: 0;
  }
  100% {
    bottom: 60px;
    opacity: 0.8;
  }
}

.from-right30 {
  -webkit-animation: fRht30 2s ease forwards;
  -moz-animation: fRht30 2s ease forwards;
  animation: fRht30 2s ease forwards;
}
@-moz-keyframes fRht30 {
  0% {
    left: 1000px;
    opacity: 0;
  }
  100% {
    left: 30px;
    opacity: 1;
  }
}
@-webkit-keyframes fRht30 {
  0% {
    left: 1000px;
    opacity: 0;
  }
  100% {
    left: 30px;
    opacity: 1;
  }
}
@keyframes fRht30 {
  0% {
    left: 1000px;
    opacity: 0;
  }
  100% {
    left: 30px;
    opacity: 1;
  }
}
</style>
