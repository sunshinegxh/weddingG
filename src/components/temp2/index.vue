<template>
  <!-- <div class="wrapper">
    <swipe :current="current" @change="onChange">
      <swipe-item v-for="(data, index) in dataList" :key="index" :active="index === current">
        <component :is="isCom(data.templatePageId)" :info="data"></component>
      </swipe-item>
    </swipe>

  </div> -->
  <div class="wrapper temp2" id="wrapper">
    <div class="section" v-for="(data, index) in dataList" :key="index">
      <component :is="isCom(data.templatePageId)" :info="data" v-show="index === current"></component>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import page1 from "./cover";
import page2 from "./page2";
import page3 from "./page3";
import page4 from "./page4";
import page5 from "./page5";
import page6 from "./page6";
import page7 from "./page7";
import page8 from "./page8";
import "../../libs/pagepiling";

export default {
  name: "template2",
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
<style lang="scss" scoped>
@import "../../common.scss";
@import "../../libs/jquery.pagepiling.css";
.wrapper {
  height: 100vh;
  overflow: hidden;
  font-family: Songti TC;
}
.wrapper.temp2 {
  background: url(../../assets/second/invitation_bg.png) no-repeat;
  background-size: 100% 100%;
}
.swipe-item {
  height: 100vh;
  background: url(../../assets/second/invitation_bg.png) no-repeat;
  background-size: 100% 100%;
}
.section {
  background-color: #fff;
}
// .swipe-item {
//   height: 100vh;
//   background: #fff;
//   background-size: 100% 100%;
// }
</style>
