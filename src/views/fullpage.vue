<template>
  <div>
    <page :currentPage="currentPage" v-for="(item, index) in indexData" :key="index">
      <component
      :currentPage="currentPage"
      :idx="index+1"
      :is="isCom(+item.templatePageId)"
      :con="item"></component>
    </page>
    <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Page from "../components/Page.vue";
import PageController from "../components/PageController.vue";
import Cover1 from "../components/temp1/cover.vue";
import First1 from "../components/temp1/first.vue";
import Second1 from "../components/temp1/second.vue";
import Third1 from "../components/temp1/third.vue";
import Forth1 from "../components/temp1/forth.vue";
import Guide1 from "../components/temp1/guide.vue";
import Info1 from "../components/temp1/info.vue";
import Cover3 from "../components/temp3/cover.vue";
import First3 from "../components/temp3/first.vue";
// import Second3 from "../components/temp3/seconds.vue";
import Tan1 from "../components/temp1/tan.vue";

// 页面进出动画
// function afterEnterAnimate($child) {
//   $child.$el
//     .querySelector(".animate")
//     .classList.remove("move-left", "move-right");
// }
// function beforeLeaveAnimate($child) {
//   let moveType = Math.random() > 0.5 ? "move-left" : "move-right";
//   $child.$el.querySelector(".animate").classList.add(moveType);
// }

export default {
  name: "fullpage",
  props: ["indexData", "refreshFlag", "changeP"],
  data() {
    return {
      currentPage: 1,
      options: [],
      controllerOption: {
        arrowsType: false,
        navbar: false,
        highlight: true,
        loop: false
      },
      loading: true
    };
  },
  watch: {
    refreshFlag(newV) {
      if (newV) {
        this.changePage(this.changeP);
        this.$emit("change-page", false);
      }
    }
  },
  computed: {
    // 总page数
    pageNum() {
      return this.indexData.length;
    },
    ...mapState({
      cardId: state => state.cardId
      // currentPage: state => state.currentPage
    })
  },
  methods: {
    changePage(index) {
      // beforeLeave Hook
      let beforeIndex = this.currentPage - 1;
      let leaveFunction = this.options[beforeIndex].beforeLeave;
      typeof leaveFunction === "function" &&
        leaveFunction.call(this, this.$children[beforeIndex]);
      // change page
      this.currentPage = index;
      // afterEnter Hook
      let nextIndex = index - 1;
      let enterFunction = this.options[nextIndex].afterEnter;
      this.$nextTick(function() {
        typeof enterFunction === "function" &&
          enterFunction.call(this, this.$children[nextIndex]);
      });
    },
    isCom(val) {
      switch (val) {
        case 1:
          return "Cover1";
        case 2:
          return "First1";
        // case 1:
        //   return "cover3";
        // case 2:
        //   return "first3";
        case 3:
          return "Second1";
        case 4:
          return "third1";
        case 5:
          return "forth1";
        case 6:
          return "guide1";
        case 7:
          return "info1";
        case 8:
          return "tan1";
      }
    },
    reCurrentPage(curPage) {
      this.changePage(curPage + 1);
      // this.currentPage = curPage + 1;
      // this.$store.commit("SET_CURPAGE", curPage + 1);
    },
    reCurpage() {
      return this.currentPage - 1;
    }
  },
  components: {
    Page,
    PageController,
    Cover3,
    First3,
    // Second3,
    Cover1,
    First1,
    Second1,
    Third1,
    Forth1,
    Guide1,
    Info1,
    Tan1
  },
  created() {
    let arr = new Array();
    let len = this.indexData.length;

    for (let i = 0; i < len; i++) {
      let obj = new Object();
      obj.background = "#fff";
      obj.color = "#fff";
      obj.index = i + 1;
      arr[i] = obj;
    }
    this.options = arr;
    window.showPageIndex = this.reCurrentPage;
    window.getShowPageIndex = this.reCurpage;
  },
  mounted() {
    this.$children.forEach((child, index) => {
      // 动态设置各个page内的options
      if (child.option === null) {
        let childOption = this.options[index];
        this.$set(childOption, "index", index + 1);
        child.option = childOption;
      }
    });
  }
};
</script>
