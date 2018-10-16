<template>
  <div class="wrapper" id="wrapper">
    <div class="section" v-for="(data, index) in dataList" :key="index">
      <component :is="isCom(data.templatePageId)" :info="data" v-show="index === current"></component>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
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
  props: ["dataList"],
  computed: {
    ...mapState({
      current: state => state.currentPage,
      isSkip: state => state.isSkip
    })
  },
  created() {
    let self = this;
    setTimeout(() => {
      /* eslint-disable no-undef */
      $(function() {
        $("#wrapper").pagepiling({
          afterLoad(a, b) {
            if (!self.isSkip) {
              // 客户端调用refreshPage不调用回调方法
              self.$store.commit("SET_CURPAGE", --b);
            }
            self.$store.commit("SET_ISSKIP", false);
          }
        });
      });
    }, 1000);
  },
  methods: {
    isCom(val) {
      return `page${val}`;
    },
    setPage(val) {
      $.fn.pagepiling.moveTo(val);
      this.$store.commit("SET_CURPAGE", --val);
    },
    isStopScrolling(falg) {
      $.fn.pagepiling.setAllowScrolling(falg);
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
  height: 100%;
  overflow: hidden;
  font-family: Songti TC;
}
.section {
  background-color: #fff;
}
.swipe-item {
  height: 100%;
  background: #fff;
  background-size: 100% 100%;
}
</style>
