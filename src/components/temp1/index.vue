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
  props: ["dataList"],
  methods: {
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
