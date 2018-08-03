<template>
    <div class="read animate" ref="section2">
      <span class="toRead" @click="changePage(3)"></span>
    </div>
</template>

<script>
export default {
  name: "read",
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

.read {
  position: relative;
  span {
    display: inline-block;
    position: absolute;
  }
  .toRead {
    width: 512 * $px;
    height: 94 * $px;
    top: 912 * $px;
    left: 120 * $px;
  }
}
</style>
