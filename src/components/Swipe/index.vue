<template>
  <div @touchstart="_touchStart" @touchend="_touchEnd" class="swipe" :style="{height: `${height}px`, transform: `translateY(${posY}px)`}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "swipe",
  props: {
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      start: 0,
      timer: null,
      pageNum: this.current,
      height: 0
    };
  },
  computed: {
    size() {
      return this.$children.length;
    },
    posY() {
      return -this.pageNum * window.innerHeight;
    }
  },
  watch: {
    current(current) {
      if (this.pageNum !== current) {
        this.pageNum = current;
      }
    }
  },
  methods: {
    scrollHandler(direction) {
      if (this.timer !== null) {
        return;
      }
      debugger;
      if (direction === "down" && this.pageNum < this.size - 1) {
        this.pageNum = this.pageNum + 1;
      } else if (direction === "up" && this.pageNum > 0) {
        this.pageNum = this.pageNum - 1;
      }
      this.$emit("change", this.pageNum);
      this.timer = setTimeout(() => {
        clearTimeout(this.timer);
        this.timer = null;
      }, 300);
    },
    _touchStart(event) {
      this.start = event.touches[0].clientY;
    },
    _touchEnd(event) {
      if (this.start === null) {
        return;
      }
      let spacing = event.changedTouches[0].clientY - this.start;
      let direction;
      if (spacing > 50) {
        direction = "up";
        this.scrollHandler(direction);
      } else if (spacing < -50) {
        direction = "down";
        this.scrollHandler(direction);
      }
      this.start = 0;
    }
  },
  mounted() {
    this.height = window.innerHeight * this.$children.length;
  }
};
</script>
<style lang="scss" scoped>
.swipe {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: transform 0.5s ease-in-out;
}
</style>
