<template>
    <div class="read animate" ref="section2">
      <span class="toRead bigR" @click="changePage(3)"></span>
    </div>
</template>

<script>
export default {
  name: "read",
  props: ["currentPage"],
  watch: {
    currentPage(newV, oldv) {
      this.current = newV;
      console.log(newV, oldv);
    }
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    changePage(index) {
      this.$emit("changePage", index);
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

.read {
  position: relative;
  span {
    display: inline-block;
    position: absolute;
    background: url("../assets/toread.png") no-repeat;
    background-size: 100%;
  }
  .toRead {
    width: 512 * $px;
    height: 94 * $px;
    top: 912 * $px;
    left: 120 * $px;
  }
}
.bigR {
  -webkit-animation: changeBiger 1s linear 2;
  -moz-animation: changeBiger 1s linear 2;
  animation: changeBiger 1s linear 2;
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
