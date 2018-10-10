<template>
  <div class="wrapper" id="wrapper">
    <div class="section" v-for="(data, index) in dataList" :key="index">
      <component :is="isCom(data.templatePageId)" :info="data" :edit="edit" v-show="index === current"></component>
    </div>
  </div>
</template>
<script>
import page1 from "./cover";
import page2 from "./first";
import page3 from "./second";
import page4 from "./third";
import page5 from "./forth";
import page6 from "./guide";
import page7 from "./info";
import page8 from "./tan";
import "../../libs/pagepiling";

export default {
  name: "template1",
  props: ["dataList", "edit"],
  data() {
    return {
      current: 0
    };
  },
  created() {
    let self = this;
    setTimeout(() => {
      /* eslint-disable no-undef */
      $(function() {
        $("#wrapper").pagepiling({
          menu: null,
          afterLoad(a, b) {
            self.current = --b;
          }
        });
      });
    }, 1000);
  },
  methods: {
    isCom(val) {
      return `page${val}`;
    }
  },
  components: {
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
<style lang="scss">
@import "../../common.scss";
@import "../../libs/jquery.pagepiling.css";
.wrapper {
  height: 100vh;
  overflow: hidden;
  font-family: Songti TC;
}
.section {
  background-color: #fff;
}
.swipe-item {
  height: 100vh;
  background: #fff;
  background-size: 100% 100%;
}
</style>
