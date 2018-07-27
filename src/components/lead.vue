<template>
  <div class="lead animate" ref="section3">
    <span class="first" @click="changePage(4)"></span>
    <span class="second" @click="changePage(5)"></span>
    <span class="third" @click="changePage(6)"></span>
    <span class="forth" @click="changePage(7)"></span>
  </div>
</template>

<script>
export default {
  name: "lead",
  data() {
    return {};
  },
  methods: {
    changePage(index) {
      this.$emit("changePage", index);
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
    width: 235 * $px;
    height: 255 * $px;
    top: 248 * $px;
    left: 78 * $px;
  }
  .second {
    width: 270 * $px;
    height: 250 * $px;
    top: 425 * $px;
    right: 80 * $px;
  }
  .third {
    width: 220 * $px;
    height: 255 * $px;
    top: 645 * $px;
    left: 78 * $px;
  }
  .forth {
    width: 204 * $px;
    height: 260 * $px;
    top: 853 * $px;
    right: 146 * $px;
  }
}
</style>
