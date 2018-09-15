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
    <full-page v-else :indexData="indexData"></full-page>
    <!-- <shot-screen></shot-screen> -->
    <!-- 只有封面有编辑按钮 每个页面都有上传图片的按钮 -->
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
      token: ""
      // musicNativeUrl: ""
    };
  },
  components: {
    fullPage,
    shotScreen
  },
  computed: {
    musicNativeUrl() {
      return localStorage.getItem("musicNativeUrl");
    }
  },
  watch: {
    musicNativeUrl(newV, oldV) {
      alert(newV + oldV);
    }
  },
  created() {
    alert("created");
    this.edit = +this.$route.query.edit === 1;
    this.cardId = +this.$route.query.cardId;
    this.token = this.$route.query.token;
    // this.musicNativeUrl = localStorage.getItem("musicNativeUrl");
    // alert("musicNativeUrl:" + this.musicNativeUrl);
    this.$http
      .get("http://192.168.0.134:3000/getIndex")
      // .get("http://47.105.43.207:80/()/banhunli/card/getCardInvitations.gg", {
      //   params: {
      //     cardId: this.cardId,
      //     token: this.token
      //   }
      // })
      .then(response => {
        this.loading = false;
        let res = response.data;
        if (res.respCode === 0) {
          // 本地注释掉
          this.indexData = res.respData;
        } else {
          alert(res.respMsg);
        }
      })
      .catch(e => {
        document.write(e);
      });
  },
  methods: {
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
