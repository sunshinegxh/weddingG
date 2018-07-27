<template>
    <div>
        <page :currentPage="currentPage">
          <introduce></introduce>
        </page>
        <page :currentPage="currentPage">
          <read></read>
        </page>
        <page :currentPage="currentPage">
          <lead @changePage="changePage"></lead>
        </page>
        <page :currentPage="currentPage">
          <good></good>
        </page>
        <page :currentPage="currentPage">
          <hrbp></hrbp>
        </page>
        <page :currentPage="currentPage">
          <money></money>
        </page>
        <page :currentPage="currentPage">
          <other></other>
        </page>
        <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
    </div>
</template>

<script>
import Page from "../components/Page.vue";
import PageController from "../components/PageController.vue";
import Introduce from "../components/introduce.vue";
import Read from "../components/read.vue";
import Lead from "../components/lead.vue";
import Good from "../components/good.vue";
import Hrbp from "../components/hrbp.vue";
import Money from "../components/money.vue";
import Other from "../components/other.vue";

// 页面进出动画
function afterEnterAnimate($child) {
  $child.$el
    .querySelector(".animate")
    .classList.remove("move-left", "move-right");
}
function beforeLeaveAnimate($child) {
  let moveType = Math.random() > 0.5 ? "move-left" : "move-right";
  $child.$el.querySelector(".animate").classList.add(moveType);
}
const intro = require("../assets/intro.jpg");
const read = require("../assets/read.jpg");
const leadall = require("../assets/leadall.jpg");
const bg = require("../assets/bg.jpg");

export default {
  name: "fullpage",
  data() {
    return {
      currentPage: 1,
      options: [
        {
          // the color of background
          background: "url(" + intro + ") no-repeat",
          // the color of text
          color: "#fff",
          // is content center
          isCenter: true,
          // the function before page show
          afterEnter: afterEnterAnimate,
          // the function after page show
          beforeLeave: beforeLeaveAnimate
        },
        {
          background: "url(" + read + ") no-repeat",
          color: "#fff",
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        },
        {
          background: "url(" + leadall + ") no-repeat",
          color: "#fff",
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        },
        {
          background: "url(" + bg + ") no-repeat",
          color: "#fff",
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        },
        {
          background: "url(" + bg + ") no-repeat",
          color: "#fff",
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        },
        {
          background: "url(" + bg + ") no-repeat",
          color: "#fff",
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        },
        {
          background: "url(" + bg + ") no-repeat",
          color: "#fff",
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        }
      ],
      controllerOption: {
        arrowsType: false,
        navbar: false,
        highlight: true,
        loop: false
      },
      loading: true,
      login: false,
      ticket: false
    };
  },
  computed: {
    // 总page数
    pageNum() {
      return this.options.length;
    },
    illegal() {
      return this.login || this.ticket;
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
    }
  },
  components: {
    Page,
    PageController,
    Introduce,
    Read,
    Lead,
    Good,
    Hrbp,
    Money,
    Other
  },
  created() {
    this.$http
      .get("//m.weibo.cn/z/newstaff/getinfo")
      .then(response => {
        this.loading = false;
        // console.log("response data:", response.data);
        let res = response.data;
        if (res.ok === 1) {
          // console.log("fromKoudai:", res.data.fromKoudai);
          // console.log("fromCPB:", res.data.fromCPB);
          // this.ticket = !res.data.fromKoudai;
          // this.login = !res.data.fromCPB;
        } else {
          alert(res.msg);
        }
      })
      .catch(e => {
        console.log(e);
      });
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

.illegal {
  height: 100%;
  background: url("../assets/bg.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  &-con {
    width: 600 * $px;
    height: 696 * $px;
    margin: 255 * $px auto 64 * $px;
    background: #fff;
    border-radius: 10 * $px;
    img {
      margin: 70 * $px 0;
      width: 406 * $px;
    }
    p {
      color: #606060;
      font-size: 30 * $px;
    }
  }
  &-close {
    width: 64 * $px;
    height: 64 * $px;
    line-height: 64 * $px;
    font-size: 50 * $px;
    text-align: center;
    margin: 0 auto;
    color: #fff;
    border-radius: 100%;
    border: 1px solid #fff;
  }
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
