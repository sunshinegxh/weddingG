<template>
  <div class="swipe-item">
    <div v-show="active">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "swipe-item",
  props: ["active"]
};
</script>
<style lang="scss" scoped>
.swipe-item {
  height: 100vh;
}
</style>
