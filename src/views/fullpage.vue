<template>
    <div>
      <page :currentPage="currentPage" v-for="(item, index) in indexData" :key="index">
        <component :currentPage="currentPage" :idx="index+1" :is="isCom(+item.templatePageId)" :con="item"></component>
      </page>
      <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
    </div>
</template>

<script>
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
  props: ["indexData"],
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
  computed: {
    // 总page数
    pageNum() {
      return this.indexData.length;
    }
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
    refreshPage(curPage) {
      this.getIndexInfo();
      this.currentPage = curPage;
      // 定位到倒数第四页 currentpage  curPage
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
    window.refreshPage = this.refreshPage;
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

<style lang="scss" type="text/css">
@import "../common.scss";

.app {
  height: 100%;
  width: 100%;
  background: #3243c7;
}

/* 下面的是与fullPage无关的样式 */

.animate {
  transition: all 1s ease-out 0s;
}

.move-left {
  transform: translateY(-1000%);
}

.move-right {
  transform: translateY(1000%);
}

@media screen and (max-width: 768px) {
  html,
  body {
    font-size: 12px;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

dt {
  font-weight: bold;
  font-size: 16px;
}

ul {
  padding-left: 1em;
}

.loadEffect {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
}
.loadEffect span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  -webkit-animation: load 1.04s ease infinite;
  animation: load 1.04s ease infinite;
}
@-webkit-keyframes load {
  0% {
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.3);
    opacity: 0.5;
  }
}
@keyframes load {
  0% {
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.3);
    opacity: 0.5;
  }
}
.loadEffect span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -10px;
  -webkit-animation-delay: 0.13s;
  animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: 14px;
  top: 14px;
  -webkit-animation-delay: 0.26s;
  animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 0;
  margin-left: -10px;
  -webkit-animation-delay: 0.39s;
  animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: 14px;
  right: 14px;
  -webkit-animation-delay: 0.52s;
  animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -10px;
  -webkit-animation-delay: 0.65s;
  animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: 14px;
  bottom: 14px;
  -webkit-animation-delay: 0.78s;
  animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 0;
  left: 50%;
  margin-left: -10px;
  -webkit-animation-delay: 0.91s;
  animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: 14px;
  left: 14px;
  -webkit-animation-delay: 1.04s;
  animation-delay: 1.04s;
}
</style>
