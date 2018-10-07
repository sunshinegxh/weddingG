<template>
  <div class="guide animate">
    <span class="guide-bg to-show-2">
      <div class="guide-bg-white from-bottomCenter">
        <img src="../../assets/location_welcome.png" class="from-topG delayP5" alt="">
        <img src="../../assets/location.jpg" class="scale21 delayP15" alt="">
        <!-- <div :class="{'scale01': isCurrent, 'delay2': isCurrent}">{{ JSON.parse(con.extra).address}}</div>
        <div :class="{'scale01': isCurrent, 'delayP25': isCurrent}">{{ JSON.parse(con.extra).time }}</div> -->
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "guide1",
  props: ["info"],
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";
.guide {
  position: relative;
  width: 100%;
  height: 100vh;
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
</style>
