<template>
  <div class="lead animate" ref="section3">
    <span :class=comClass(1) @click="changePage(4)"></span>
    <span :class=comClass(2) @click="changePage(5)"></span>
    <span :class=comClass(3) @click="changePage(6)"></span>
    <span :class=comClass(4) @click="changePage(7)"></span>
  </div>
</template>

<script>
export default {
  name: "lead",
  props: ["currentPage"],
  watch: {
    currentPage(newV, oldv) {
      this.current = newV;
      console.log(newV, oldv);
    }
  },
  data() {
    return {
      current: 1
    };
  },
  methods: {
    changePage(index) {
      this.$emit("changePage", index);
    },
    comClass(index) {
      return {
        first: index === 1,
        second: index === 2,
        third: index === 3,
        forth: index === 4,
        big: this.current === 3,
        big1: this.current === 3 && index === 2,
        big2: this.current === 3 && index === 3,
        big3: this.current === 3 && index === 4
      };
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.lead {
  position: relative;
  span {
    display: inline-block;
    position: absolute;
  }
  .first {
    background: url("../assets/lead1.png") no-repeat;
    background-size: 100%;
    width: 196 * $px;
    height: 174 * $px;
    top: 248 * $px;
    left: 78 * $px;
  }
  .second {
    background: url("../assets/lead2.png") no-repeat;
    background-size: 100%;
    width: 200 * $px;
    height: 171 * $px;
    top: 425 * $px;
    right: 80 * $px;
  }
  .third {
    background: url("../assets/lead3.png") no-repeat;
    background-size: 100%;
    width: 179 * $px;
    height: 175 * $px;
    top: 645 * $px;
    left: 78 * $px;
  }
  .forth {
    background: url("../assets/lead4.png") no-repeat;
    background-size: 100%;
    width: 170 * $px;
    height: 182 * $px;
    top: 853 * $px;
    right: 146 * $px;
  }
}

.big {
  -webkit-animation: changeBiger 1s linear backwards;
  -moz-animation: changeBiger 1s linear backwards;
  animation: changeBiger 1s linear backwards;
}

.big1 {
  animation-delay: 1s;
}

.big2 {
  animation-delay: 2s;
}

.big3 {
  animation-delay: 3s;
}

@-moz-keyframes changeBiger {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.1);
  }
}
@-webkit-keyframes changeBiger {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes changeBiger {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
