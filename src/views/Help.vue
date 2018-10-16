<template>
  <div class="help">
    <div class="help-title">
      <img :src="user.userIcon" alt="">
      <span>{{ user.nickName }}</span>
    </div>
    <p>邀请你使用伴婚礼</p>
    <p>帮助ta一起完成备婚</p>
    <div class="help-card">
      <div class="help-card-up">
        <span>他的婚礼ID</span>
        <p>{{ weddingId }}</p>
        <img src="../assets/help/synergy_share_btn_copy.png" alt="">
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
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/mine/getUserInfo.gg", {
          userId: this.userId
        })
        .then(response => {
          // this.loading = false;
          // console.log(response.body.data);
          // let res = response.body.data;
          if (response.body.code === "0000") {
            this.user = response.body.data;
            // this.cur = this.musicList[0];
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
    img {
      width: 48 * $vw;
      height: 48 * $vh;
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
      height: 400 * $vh;
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
    }
    &-down {
      width: 702 * $vw;
      height: 414 * $vh;
      background: #fff;
      margin: -10 * $vh auto;
      border-top-left-radius: 0 * $vw;
      border-top-right-radius: 0 * $vw;
      border-bottom-right-radius: 50 * $vw;
      border-bottom-left-radius: 50 * $vw;
      img {
        width: 260 * $vw;
        height: 260 * $vh;
        margin: 40 * $vh 0 36 * $vh 0;
      }
      p {
        font-size: 32 * $vw;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 48 * $vh;
        margin-bottom: 48 * $vh;
      }
    }
  }
}
</style>
