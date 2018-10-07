<template>
  <div class="info">
    <span class="info-bg to-show-2">
      <div class="info-bg-white from-bottomCenter">
        <img src="../../assets/location_welcome.png" class="from-topG" alt="">
        <p class="info-bg-white-p from-bottom delay1">为了方便新人，请填写您的赴宴信息</p>
        <div class="clearflex from-bottom delayP15">
          <span>姓名</span>
          <input
            placeholder="请输入您的姓名"
            v-model="username"/>
        </div>
        <div class="clearflex from-bottom delay2">
          <span>关系</span>
          <p @click="relation">{{ comfirm.length > 0 ? `${comfirm[0].relationName}${comfirm[1].relationName}` : '选择您和新人的关系' }}</p>
        </div>
        <div class="clearflex from-bottom delayP25">
          <span>赴宴人数</span>
          <p class="m-num">
            <span @click="count--">-</span>
            <input type="tel" readonly v-model="count">
            <span @click="count++">+</span>
          </p>
        </div>
        <div @click="sub" class="from-bottom delay3">确认赴宴并提交信息</div>
      </div>
      <div class="pick">
        <div class="pick-title clearflex">
          <span @click="close">关闭</span>
          <span @click="finish">完成</span>
        </div>
        <mt-picker v-if="pickShow" :slots="slots" @change="onValuesChange" valueKey="relationName"></mt-picker>
      </div>
    </span>
  </div>
</template>

<script>
import toast from "../common/toast";

export default {
  name: "info1",
  props: ["info"],
  data() {
    return {
      count: 1,
      username: "",
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center"
        },
        {
          flex: 1,
          values: [],
          className: "slot2",
          textAlign: "center"
        }
      ],
      pickShow: false,
      rela: [],
      comfirm: []
    };
  },
  created() {},
  methods: {
    relation() {
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/tool/getRelations.gg", {
          haveSelf: 0
        })
        .then(response => {
          this.pickShow = true;
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.slots[0].values = [...res.head];
            this.slots[1].values = [...res.tail];
          } else {
            console.log("res.respCode", res.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    onValuesChange(picker, values) {
      this.rela = values;
      console.log(values);
    },
    finish() {
      this.comfirm = [...this.rela];
      this.pickShow = false;
    },
    close() {
      this.pickShow = false;
    },
    sub() {
      if (this.username === "" || this.comfirm.length === 0) {
        toast("请完善个人信息！");
        return;
      }
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/card/h5AddVisitor.gg", {
          cardId: 16,
          visitorName: this.username,
          carryNumber: this.count,
          relationHead: this.comfirm[0].relationId,
          relationTail: this.comfirm[1].relationId
        })
        .then(response => {
          if (response.body.code === "0000") {
            toast("添加成功");
          } else {
            toast(response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    }
  },
  components: {}
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";
.info {
  position: relative;
  width: 100%;
  height: 100vh;
  &-bg {
    width: 100%;
    position: relative;
    height: 100%;
    display: inline-block;
    background: url("../../assets/page4_bg_down_left.png") no-repeat;
    background-size: 100%;
    &-white {
      color: #8eb559;
      font-size: 36 * $px;
      width: 702 * $px;
      height: 862 * $px;
      background: #fff;
      position: absolute;
      top: 1000px;
      left: 50%;
      margin-left: -351 * $px;
      margin-top: -431 * $px;
      img:nth-of-type(1) {
        position: relative;
        top: -1000px;
        width: 100%;
        height: 250 * $px;
      }
      &-p {
        text-align: center;
        color: #999999;
        font-size: 32 * $px;
        margin: 0;
        position: relative;
        top: 50 * $px;
        opacity: 0;
      }
      div {
        margin: 56 * $px auto 0;
        width: 612 * $px;
        line-height: 96 * $px;
        border-bottom: 1px solid #f3f3f3;
        position: relative;
        box-sizing: border-box;
        font-size: 32 * $px;
        position: relative;
        top: 50 * $px;
        opacity: 0;
        span {
          width: 140 * $px;
          color: #000000;
          float: left;
          line-height: 96 * $px;
          text-align: left;
        }
        input {
          height: 100%;
          display: inline-block;
          border: none;
          margin-left: 140 * $px;
          font-size: 30 * $px;
          color: #999999;
          border: none;
        }
        p {
          height: 100%;
          color: #999999;
          margin-left: 140 * $px;
          text-align: left;
          font-size: 30 * $px;
          margin: 0;
        }
        .m-num {
          position: relative;
          height: 96 * $px;
          line-height: 96 * $px;
          span {
            width: 36 * $px;
            height: 36 * $px;
            line-height: 36 * $px;
            margin-top: 30 * $px;
            text-align: center;
            border: 1px solid #999999;
            float: left;
          }
          input {
            border: none;
            float: left;
            width: 50 * $px;
            margin-left: 234 * $px;
          }
          span:nth-of-type(1) {
            margin-left: 10 * $px;
          }
          span:nth-of-type(2) {
            margin-left: 105 * $px;
          }
        }
      }
      div:nth-of-type(2),
      div:nth-of-type(3) {
        margin: 0 auto;
        position: relative;
        top: 50 * $px;
        opacity: 0;
      }
      div:nth-of-type(4) {
        background: #8eb559;
        color: #fff;
        height: 94 * $px;
        line-height: 94 * $px;
        margin: 0 auto;
        border-radius: 48 * $px;
        margin-top: 60 * $px;
        position: relative;
        top: 50 * $px;
        opacity: 0;
      }
    }
  }
}
.info .delay1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.info .delayP15 {
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.info .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.info .delayP25 {
  -moz-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}
.info .delay3 {
  -moz-animation-delay: 3s;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.from-bottom {
  -webkit-animation: fBtm 2s forwards;
  -moz-animation: fBtm 2s forwards;
  animation: fBtm 2s forwards;
}
@-moz-keyframes fBtm {
  0% {
    top: 50 * $px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
@-webkit-keyframes fBtm {
  0% {
    top: 50 * $px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
@keyframes fBtm {
  0% {
    top: 50 * $px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

.pick {
  background: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  &-title {
    position: absolute;
    width: 100%;
    z-index: 1000;
    color: #000;
    padding: 10 * $px;
    box-sizing: border-box;
    span:nth-of-type(1) {
      float: left;
    }
    span:nth-of-type(2) {
      float: right;
    }
  }
}
</style>
