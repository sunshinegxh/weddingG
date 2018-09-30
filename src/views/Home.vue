<template>
  <div class="app">
    <div id="loading" v-if="loading">
        <div>
            <div class="loading-icon"></div>
        </div>
    </div>
    <full-page
      v-else
      :indexData="indexData"
      :refreshFlag="refreshFlag"
      :changeP="changeP"
      v-on:change-page="changePage">
    </full-page>
    <shot-screen></shot-screen>
    <!-- 只有封面有编辑按钮 每个页面都有上传图片的按钮 -->
    <audio class="invite_music" :src="musicNativeUrl" controls="controls" preload id="music1"></audio>
  </div>
</template>

<script>
import fullPage from "./fullpage.vue";
import shotScreen from "../components/ShotScreen";
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

export default {
  name: "app",
  data() {
    return {
      loading: true,
      indexData: [],
      edit: false,
      changeP: 1,
      cardId: 0,
      templateId: 0,
      token: "",
      musicNativeUrl: "",
      refreshFlag: false,
      options: [],
      controllerOption: {
        arrowsType: false,
        navbar: false,
        highlight: true,
        loop: false
      }
    };
  },
  computed: {
    // 总page数
    pageNum() {
      return this.indexData.length;
    }
  },
  created() {
    this.edit = +this.$route.query.edit === 1;
    this.cardId = +this.$route.query.cardId;
    this.templateId = +this.$route.query.templateId;
    this.$store.commit("SET_EDIT", this.edit);
    this.$store.commit("SET_CARDID", this.cardId);
    window.setMusic = this.setMusic;
    window.refreshPage = this.refreshPage;
    if (+this.$route.query.edit === 1) {
      // 编辑状态
      this.getIndexInfo();
    } else if (+this.$route.query.edit === 0) {
      // 获取模板信息
      this.getTemInfo();
    } else {
      // 编辑完之后的预览
      this.getIndexInfo();
    }
  },
  methods: {
    getIndexInfo() {
      this.$http
        // .get("http://localhost:3000/getIndex")
        .post(
          "http://47.105.43.207:80/()/banhunli/card/getCardInvitations.gg",
          {
            cardId: this.cardId
          }
        )
        .then(response => {
          this.loading = false;
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.indexData = res.pageList;
            this.refreshFlag = true;
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    getTemInfo() {
      this.$http
        // .get("http://localhost:3000/getIndex")
        .post("http://47.105.43.207:80/()/banhunli/card/getCardTemplate.gg", {
          templateId: this.templateId
        })
        .then(response => {
          this.loading = false;
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.indexData = res.pageList;
            console.log(this.indexData);
          } else {
            console.log("res.respCode", res.message);
          }
        })
        .catch(e => {
          console.log("e:", e);
        });
    },
    setMusic(params) {
      alert("this.musicNativeUrl:" + params);
      this.musicNativeUrl = params;
    },
    refreshPage(curPage) {
      alert("refreshPage:" + curPage);
      this.changeP = curPage + 1;
      this.getIndexInfo();
    },
    changePage(info) {
      this.refreshFlag = info;
    }
  },
  components: {
    fullPage,
    shotScreen,
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
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../common.scss";

.app {
  height: 100%;
  width: 100%;
  // background: #3243c7;
  .invite_music {
    width: 64 * $px;
    height: 64 * $px;
    position: fixed;
    top: 52 * $px;
    right: 24 * $px;
    z-index: 1000;
    background: url("../assets/invitetion_ic_music_default.png") no-repeat;
  }
  .edit {
    width: 112 * $px;
    height: 112 * $px;
    z-index: 1000;
  }
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
#loading {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1200;
  background: #000;
  opacity: 0.6;

  div {
    .loading-icon {
      display: block;
      width: 40px;
      height: 40px;
      background-image: url("https://h5.sinaimg.cn/upload/1005/453/2018/05/30/loading.png");
      background-size: contain;
      background-repeat: no-repeat;
      animation: loading_rotate 1s infinite;
    }
  }
}

@keyframes loading_rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
