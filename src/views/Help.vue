<template>
  <div class="help">
    <div class="help-title">
      <!-- <img :src="user.userIcon" alt=""> -->
      <span class="help-title-user" :style="{'background-image': `url(${user.userIcon})`}"></span>
      <span>{{ user.nickName }}</span>
    </div>
    <p>邀请你使用伴婚礼</p>
    <p>帮助ta一起完成备婚</p>
    <div class="help-card">
      <div class="help-card-up">
        <span>他的婚礼ID</span>
        <p id="codeNum">{{ weddingId }}</p>
        <input id="input" type="text" v-model="weddingId"/>
        <img
          src="../assets/help/synergy_share_btn_copy.png"
          alt=""
          v-clipboard:copy="weddingId"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError">
      </div>
      <img class="help-card-middle" src="../assets/help/middle.jpg" alt="">
      <div class="help-card-down">
        <img src="../assets/help/erweima.jpg" alt="">
        <p>长按屏幕识别二维码下载伴婚礼</p>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../libs/utils";
import toast from "../components/common/toast";

export default {
  name: "Help",
  data() {
    return {
      user: {}
    };
  },
  computed: {
    weddingId() {
      return this.$route.query.weddingId;
    },
    userId() {
      return this.$route.query.userId;
    }
  },
  created() {
    document.title = "伴婚礼";
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.$http
        .post(`${utils.api()}/()/banhunli/mine/getUserInfo.gg`, {
          userId: this.userId
        })
        .then(response => {
          if (response.body.code === "0000") {
            this.user = response.body.data;
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    set() {
      return `${this.cur.musicId}-${this.cur.musicUrl}`;
    },
    choose(item) {
      this.cur = item;
    },
    nomussic(item) {
      console.log(
        item.musicId,
        this.cur.musicId,
        item.musicId === this.cur.musicId
      );
      return item.musicId !== this.cur.musicId;
    },
    onCopy() {
      toast("复制成功！");
    },
    onError() {
      toast("复制失败！");
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.help {
  background: url("../assets/help/synergy_share_bg.jpg") no-repeat;
  background-size: 100% 100%;
  min-height: 100%;
  overflow: hidden;
  &-title {
    height: 48 * $vh;
    margin: 56 * $vh 0 32 * $vh 0;
    text-align: center;
    &-user {
      display: inline-block;
      width: 48 * $vw;
      height: 48 * $vw;
      background-size: 100% 100%;
      border-radius: 48 * $vw;
      vertical-align: middle;
      margin-right: 16 * $vw;
    }
    span {
      font-size: 36 * $vw;
      color: #fff;
      font-weight: bolder;
      height: 100%;
      vertical-align: middle;
      line-height: 48 * $vh;
    }
  }
  p {
    font-size: 60 * $vw;
    margin: 0 0 30 * $vh 0;
    color: #fff;
  }
  &-card {
    &-up {
      width: 702 * $vw;
      height: 410 * $vh;
      background: #fff;
      margin: 0 auto;
      border-top-left-radius: 50 * $vw;
      border-top-right-radius: 50 * $vw;
      border-bottom-right-radius: 0 * $vw;
      border-bottom-left-radius: 0 * $vw;
      span {
        display: inline-block;
        height: 31 * $vw;
        font-size: 32 * $vw;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 48 * $vw;
        margin-top: 48 * $vh;
      }
      p {
        font-size: 120 * $vh;
        font-weight: 500;
        color: rgba(102, 144, 250, 1);
        line-height: 48 * $vw;
        margin-top: 60 * $vh;
      }
      img {
        width: 248 * $vw;
        margin-top: 48 * $vh;
      }
    }
    &-middle {
      width: 702 * $vw;
      margin-top: -1px;
    }
    &-down {
      width: 702 * $vw;
      height: 414 * $vh;
      background: #fff;
      margin: -15 * $vh auto;
      padding-bottom: 30 * $vh;
      border-top-left-radius: 0 * $vw;
      border-top-right-radius: 0 * $vw;
      border-bottom-right-radius: 50 * $vw;
      border-bottom-left-radius: 50 * $vw;
      img {
        width: 260 * $vw;
        height: 260 * $vw;
        margin: 40 * $vh 0 36 * $vh 0;
      }
      p {
        font-size: 32 * $vw;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 48 * $vh;
      }
    }
  }
}
#input {
  opacity: 0;
  z-index: -1;
  display: none;
}
</style>
