<template>
  <div class="tan animate" ref="`section${idx}`">
    <div :class="{'tan-bg': true, 'to-show-2': isCurrent}">
      <img src="../../assets/barrage_thankyou.png" :class="{'from-right24': isCurrent}" alt="">
      <div class="tan-bg-text">
        <ul v-if="showData.length > 0">
          <li v-for="(item, index) in showData" :key="index" :class="liClass(index)"><span>{{ item }}</span></li>
        </ul>
      </div>
      <div class="tan-bg-bless">
        <input
          placeholder="写下你的祝福"
          v-model="blession"/>
        <span @click="submit">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
import toast from "../common/toast";
import { mapState } from "vuex";

export default {
  name: "tan1",
  props: ["idx", "con", "currentPage"],
  watch: {
    currentPage(newV) {
      this.isCurrent = newV === this.idx;
      if (this.isCurrent) {
        let i = 0;
        let self = this;
        setInterval(() => {
          let sindex = i % this.showData.length;
          let tindex = i % this.tanData.length;
          self.$set(self.showData, sindex, self.tanData[tindex]);
          i++;
        }, 2000);
      }
    }
  },
  data() {
    return {
      isCurrent: false,
      blession: "",
      showData: [],
      tanData: []
    };
  },
  created() {
    if (this.isCurrent) {
      this.getDanInfo();
    }
  },
  computed: {
    ...mapState({
      cardId: state => state.cardId
    })
  },
  methods: {
    getDanInfo() {
      this.$http
        .post(
          "http://47.105.43.207:80/()/banhunli/card/getPublishWishList.gg",
          {
            cardId: this.cardId,
            pageNo: 1,
            pageSize: 20
          }
        )
        .then(response => {
          let res = response.body.data;
          if (response.body.code === "0000") {
            res.wishList.map(v => {
              this.tanData.push(v.wish);
            });
            this.showData = [this.tanData[0], this.tanData[1], this.tanData[2]];
          } else {
            console.log("getPublishWishList:", response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    submit() {
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/card/addWish.gg", {
          cardId: this.cardId,
          wishUserName: "sfs",
          wish: this.blession
        })
        .then(response => {
          if (response.body.code === "0000") {
            this.blession = "";
            toast("添加成功，待审核");
          } else {
            toast("添加失败");
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    liClass(index) {
      switch (+index) {
        case 0:
          return {
            delay2: this.isCurrent,
            firstA: this.isCurrent
          };
        case 1:
          return {
            delay4: this.isCurrent,
            firstA: this.isCurrent
          };
        case 2:
          return {
            delay6: this.isCurrent,
            firstA: this.isCurrent
          };
        default:
          return {
            "tan-bg-none": true
          };
      }
    }
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";
.tan {
  position: relative;
  width: 100%;
  height: 100%;
  &-bg {
    width: 100%;
    position: relative;
    height: 100%;
    display: inline-block;
    background: url("../../assets/barrage_bg.png") no-repeat;
    background-size: 100%;
    img {
      position: absolute;
      width: 40 * $px;
      top: 50%;
      transform: translate(0, -50%);
      right: -1000 * $px;
      opacity: 0;
    }
    &-bless {
      position: absolute;
      bottom: 48 * $px;
      width: 100%;
      height: 80 * $px;
      line-height: 80 * $px;
      input {
        width: 530 * $px;
        border-radius: 48 * $px;
        height: 100%;
        border: none;
        text-align: left;
        color: rgba(255, 255, 255, 1);
        background: rgba(0, 0, 0, 0.4);
        display: inline-block;
        margin-left: 24 * $px;
        box-sizing: border-box;
        padding: 0 30 * $px;
      }
      input:-ms-input-placeholder {
        color: #fff;
        opacity: 1;
      }
      input::-webkit-input-placeholder {
        color: #fff;
        opacity: 1;
      }
      span {
        float: right;
        width: 148 * $px;
        height: 100%;
        background: #8eb559;
        border-radius: 48 * $px;
        text-align: center;
        color: #fff;
        margin-right: 24 * $px;
        font-size: 32 * $px;
      }
    }
    &-text {
      position: absolute;
      width: 350 * $px;
      height: 400 * $px;
      bottom: 260 * $px;
      ul {
        position: relative;
        height: 100%;
        li {
          font-size: 24 * $px;
          margin-left: 24 * $px;
          border-radius: 48 * $px;
          text-align: left;
          padding: 14 * $px 32 * $px;
          position: absolute;
          opacity: 0;
          left: 24 * $px;
          top: 366 * $px;
          word-break: break-all;
          span {
            height: 48 * $px;
            line-height: 24 * $px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
      }
    }
    &-none {
      opacity: 0;
    }
  }
}

.tan .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.tan .delay4 {
  -moz-animation-delay: 4s;
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}
.tan .delay6 {
  -moz-animation-delay: 6s;
  -webkit-animation-delay: 6s;
  animation-delay: 6s;
}
.tan .delay8 {
  -moz-animation-delay: 8s;
  -webkit-animation-delay: 8s;
  animation-delay: 8s;
}

.from-right24 {
  -webkit-animation: fRht24 2s ease forwards;
  -moz-animation: fRht24 2s ease forwards;
  animation: fRht24 2s ease forwards;
}
@-moz-keyframes fRht24 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 24 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fRht24 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 24 * $px;
    opacity: 1;
  }
}
@keyframes fRht24 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 24 * $px;
    opacity: 1;
  }
}

.firstA {
  -webkit-animation: fa 6s linear infinite;
  -moz-animation: fa 6s linear infinite;
  animation: fa 6s linear infinite;
}
@keyframes fa {
  0% {
    opacity: 0;
    left: 24 * $px;
    top: 366 * $px;
  }
  33% {
    opacity: 1;
    top: 244 * $px;
    left: 24 * $px;
    color: rgba(255, 255, 255, 0.4);
    background: rgba(0, 0, 0, 0.4);
  }
  66% {
    opacity: 1;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.6);
    top: 122 * $px;
    left: 24 * $px;
    transform: scale(1.2);
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    color: rgba(255, 255, 255, 0.4);
    background: rgba(0, 0, 0, 0.4);
    top: 0 * $px;
    left: 24 * $px;
    transform: scale(1.2);
    transform-origin: left bottom;
  }
}
</style>
