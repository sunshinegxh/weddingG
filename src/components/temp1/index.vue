<template>
  <div class="wrapper">
    <swipe :current="current" @change="onChange">
      <swipe-item v-for="(data, index) in dataList" :key="index" :active="index === current">
        <!-- <component :is="isCom(data.templatePageId)" :info="data"></component> -->
        <component :is="isCom(data.templatePageId)" :info="data" :edit="edit"></component>
        <!-- <component :is="isCom(8)" :info="data" :key="data.pageId"></component> -->
      </swipe-item>
    </swipe>
  </div>
</template>
<script>
import Swipe from "../Swipe";
import SwipeItem from "../Swipe/item";
import page1 from "./cover";
import page2 from "./first";
import page3 from "./second";
import page4 from "./third";
import page5 from "./forth";
import page6 from "./guide";
import page7 from "./info";
import page8 from "./tan";

export default {
  name: "template1",
  props: ["dataList", "edit"],
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(current) {
      console.log("onChange", current);
      this.current = current;
    },
    isCom(val) {
      return `page${val}`;
    }
  },
  components: {
    Swipe,
    SwipeItem,
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8
  }
};
</script>
<style lang="scss" scoped>
@import "../../common.scss";
.wrapper {
  height: 100vh;
  overflow: hidden;
  font-family: Songti TC;
}
.swipe-item {
  height: 100vh;
  background: #fff;
  background-size: 100% 100%;
}
</style>
