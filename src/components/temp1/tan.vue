<template>
    <div class="home" @click="changePage(3)"></div>
</template>

<script>
export default {
  name: "home",
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
@import "../../common.scss";

.home {
  background: url("../../assets/home.png") no-repeat;
  background-size: 100%;
  width: 50 * $px;
  height: 50 * $px;
  position: fixed;
  right: 50 * $px;
  bottom: 30 * $px;
  margin: 0;
}
</style>
