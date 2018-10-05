<template>
  <div>
    <swipe>
      <swipe-item v-for="(data, index) in dataList" :key="index">
        <component :is="isCom(data.templatePageId)" :data="data"></component>
      </swipe-item>
    </swipe>
  </div>
</template>
<script>
import Swipe from "../Swipe";
import SwipeItem from "../Swipe/item";
export default {
  name: "template1",
  props: ["dataList"],
  mounted() {
    console.log("template1:", this.dataList);
  },
  methods: {
    isCom(val) {
      return `template${val}`;
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
};
</script>
