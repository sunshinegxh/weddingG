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
    <div class="aa" v-else>
      <div v-if="illegal" class="illegal">
        <div class="illegal-con" v-if="ticket">
          <img src="../assets/ticket.jpg" alt="">
          <p>请使用"新浪口袋"扫码登录</p>
        </div>
        <div class="illegal-con" v-else>
          <img src="../assets/login.jpg" alt="">
          <p>非微博产品部同学无法查阅哦～</p>
        </div>
        <!-- <div class="illegal-close" @click="close()">x</div> -->
      </div>
      <full-page v-else></full-page>
    </div>
  </div>
</template>

<script>
import fullPage from "./fullpage.vue";

export default {
  name: "app",
  data() {
    return {
      loading: true,
      login: false,
      ticket: false
    };
  },
  computed: {
    illegal() {
      return this.login || this.ticket;
    }
  },
  methods: {},
  components: {
    fullPage
  },
  created() {
    this.$http
      .get("//m.weibo.cn/z/newstaff/getinfo")
      .then(response => {
        this.loading = false;
        let res = response.data;
        if (res.ok === 1) {
          // 本地注释掉
          this.ticket = !res.data.fromKoudai;
          this.login = !res.data.fromCPB;
        } else {
          alert(res.msg);
        }
      })
      .catch(e => {
        document.write(e);
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
.aa {
  height: 100%;
}
.illegal {
  height: 100%;
  background: url("../assets/bg.jpg") no-repeat center center fixed;
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
</style>
