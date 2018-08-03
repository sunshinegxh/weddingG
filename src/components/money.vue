<template>
    <div class="money animate" ref="section4">
      <img src="../assets/moneyTitle.png" alt="">
      <div class="money-content" v-for="(item, index) in desc" :key="index">
        <div class="money-content-idx">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="money-content-des" v-html="item"></div>
      </div>
      <div class="money-content">
        <div class="money-content-idx">
          <p>3</p>
        </div>
        <div class="money-content-des">
            <div class="money-content-des-con">
            <div class="money-content-des-con-left">链接文档：</div>
            <div class="money-content-des-con-right">
                <span @click="printing('PC', '个人报销使用帮助')">《个人报销使用帮助-PC版》</span><br/>
                <span @click="printing('m', '出差报销')">《出差报销》</span><br/>
                <span @click="printing('mistake', '报销改错')">《报销改错》</span><br/>
                <span @click="printing('rules', '其他细则补充说明')">《其他细则补充说明》</span>
            </div>
        </div>
        </div>
      </div>
      <home @changePage="changePage"></home>
    </div>
</template>

<script>
import Home from "./home";

export default {
  name: "money",
  data() {
    return {
      desc: [
        `<p>每月<span>15日前</span>入职的员工可以参与<span>当月报销，15日后</span>入职的，<span>下月</span>可进行报销</p>`,
        `<p>请认真阅读<span>每月报销邮件提醒及附件</span>各项具体要求,按<span>邮件要求的截止时间</span>提交纸质单据，过期不候</p>`
      ]
    };
  },
  methods: {
    changePage(index) {
      this.$emit("changePage", index);
    },
    printing(con, cn) {
      if (window.appInterface) {
        window.appInterface.call("urlDownload", {
          url: `http://html5.pages.intra.weibo.cn/newbee/docs/${con}.docx`,
          name: `${cn}.docx`
        });
      }
    }
  },
  components: {
    Home
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.money {
  img {
    margin-top: 76 * $px;
    width: 100%;
    margin-bottom: 80 * $px;
  }
  &-content {
    font-size: 26 * $px;
    display: flex;
    padding-right: 60 * $px;
    position: relative;
    &-idx {
      width: 35 * $px;
      height: 100%;
      margin: 0 24 * $px 0 49 * $px;
      p {
        width: 35 * $px;
        height: 35 * $px;
        line-height: 38 * $px;
        text-align: center;
        margin: 0;
        background: #faa746;
        border-radius: 100%;
        font-weight: bold;
      }
    }
    &-idx::after {
      content: "";
      top: 35 * $px;
      bottom: 0px;
      width: 2px;
      left: 65 * $px;
      background: #faa746;
      position: absolute;
    }
    &-des {
      flex: 1;
      text-align: left;
      p {
        margin: 0 0 25 * $px 0;
        span {
          color: #ffdd20;
        }
        span.und {
          text-decoration: underline;
        }
      }
      &-con {
        display: flex;
        span {
          text-decoration: underline;
          color: #ffdd20;
          display: inline-block;
        }
        &-left {
          width: 140 * $px;
        }
        &-right {
          flex: 1;
        }
      }
    }
  }
  &-content:nth-of-type(3) {
    .money-content-idx::after {
      content: "";
      top: 0;
      bottom: 0;
      width: 0;
      position: absolute;
    }
  }
}
</style>
