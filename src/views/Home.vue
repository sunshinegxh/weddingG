<template>
  <div class="app">
    <div class="loadEffect" v-if="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <full-page v-else :indexData="indexData" :currentPage="currentPage"></full-page>
    <!-- <shot-screen></shot-screen> -->
    <!-- 只有封面有编辑按钮 每个页面都有上传图片的按钮 -->
    <audio class="invite_music" :src="musicNativeUrl" controls="controls" preload id="music1"></audio>
    <img
      src="../assets/invite_ic_pic.png"
      class="invite_ic_pic"
      v-if="edit"
      alt="">
    <img
      src="../assets/invite_ic_edit.png"
      class="edit"
      v-if="edit"
      @click="editNative"
      alt="">
  </div>
</template>

<script>
import fullPage from "./fullpage.vue";
import shotScreen from "../components/ShotScreen";

export default {
  name: "app",
  data() {
    return {
      loading: true,
      indexData: [],
      edit: false,
      cardId: 0,
      token: "",
      musicNativeUrl: "",
      currentPage: 1
    };
  },
  components: {
    fullPage,
    shotScreen
  },
  created() {
    this.edit = +this.$route.query.edit === 1;
    this.cardId = +this.$route.query.cardId;
    this.cardId = 16;
    window.setMusic = this.setMusic;
    window.refreshPage = this.refreshPage;
    this.getIndexInfo();
  },
  methods: {
    getIndexInfo() {
      this.$http
        .get("http://localhost:3000/getIndex")
        // .post(
        //   "http://47.105.43.207:80/()/banhunli/card/getCardInvitations.gg",
        //   {
        //     cardId: this.cardId
        //   }
        // )
        .then(response => {
          this.loading = false;
          let res = response.body.data;
          // console.log(response, response.body, res, response.body.code);
          if (response.body.code === "0000") {
            this.indexData = res.pageList;
            console.log(this.indexData);
          } else {
            console.log("res.respCode", res.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    setMusic(params) {
      alert("this.musicNativeUrl:" + params);
      this.musicNativeUrl = params;
      alert("this.musicNativeUrl:" + this.musicNativeUrl);
    },
    refreshPage(curPage) {
      this.getIndexInfo();
      this.currentPage = curPage;
      // 定位到倒数第四页 currentpage  curPage
    },
    editNative() {
      let self = this;
      const bridge = window.Android;
      function toEditPage() {
        window.Android.toEditPage(self.cardId);
      }
      if (bridge) {
        toEditPage();
      } else {
        document.addEventListener("Android", () => {
          toEditPage();
        });
      }
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.app {
  height: 100%;
  width: 100%;
  background: #3243c7;
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
    position: fixed;
    bottom: 248 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic {
    width: 112 * $px;
    height: 112 * $px;
    position: fixed;
    top: 612 * $px;
    left: 50%;
    transform: translate(-50%, 0);
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
</style>
