<template>
  <div class="wrapper">
    <div class="bg"></div>
    <div class="message-wrapper">
      <div class="message-input" @click="showBless">写下你的祝福</div>
    </div>
    <div v-if="tanData.length > 0" class="message">
      <div class="message-item" :class="getClass(i)" v-for="(text, i) in showData" :key="i">
        {{ text }}
      </div>
    </div>
    <send-bless v-show="showB" @send="send" @closeB="closeB"></send-bless>
  </div>
</template>

<script>
import sendBless from "../common/sendBless";
import { mapState } from "vuex";
import utils from "../../libs/utils";
const SIZE = 4;

export default {
  name: "template-2-page-8",
  data() {
    return {
      tanData: [],
      index: 0,
      showIndex: 0,
      showData: [],
      timmer: null,
      showB: false,
      sendBlessText: ""
    };
  },
  created() {
    this.getDanInfo();
  },
  unmounted() {
    clearTimeout(this.timmer);
  },
  methods: {
    showBless() {
      if (+this.edit === 3) {
        this.showB = !this.showB;
      }
    },
    getClass(i) {
      if (i === this.showIndex) {
        return "tan1";
      }
      if (i === (this.showIndex + 1) % SIZE) {
        return "tan2";
      }
      if (i === (this.showIndex + 2) % SIZE) {
        return "tan3";
      }
    },
    startTimer() {
      this.timmer = setTimeout(() => {
        if (this.sendBlessText) {
          this.tanData.push(this.sendBlessText);
          this.sendBlessText = "";
        }

        this.index = (this.index + 1) % this.tanData.length || 0;
        this.showData.splice(this.showIndex, 1, this.tanData[this.index]);
        this.showIndex = (this.showIndex + 1) % SIZE;
        this.timmer = this.startTimer();
      }, 2000);
    },
    getDanInfo() {
      this.$http
        .post(`${utils.api()}/()/banhunli/card/getPublishWishList.gg`, {
          cardId: this.$route.query.cardId,
          pageNo: 1,
          pageSize: 20
        })
        .then(response => {
          let res = response.body.data;
          if (response.body.code === "0000") {
            // TODO
            res.wishList.map(v => {
              this.tanData.push(v.wish);
            });

            if (res.wishList.length > 0) {
              this.showData = Array.from(Array(SIZE), (i, item) => {
                const pos = item % this.tanData.length;
                return this.tanData[pos];
              });
              this.index = 2 % this.tanData.length;
              this.showIndex = 0;
              this.timmer = null;
              this.startTimer();
            }
          } else {
            console.log("getPublishWishList:", response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    send(wish) {
      this.showB = false;
      // console.log(wish)
      if (this.tanData.length <= 0) {
        this.showIndex = 0;
        this.timmer = null;
        this.startTimer();
      }
      this.sendBlessText = wish;
      // this.tanData.push(wish);
    },
    closeB() {
      this.showB = false;
    }
  },
  components: {
    sendBless
  },
  computed: {
    ...mapState({
      edit: state => state.edit
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../common.scss";
.wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
  font-family: PingFangSC-Regular;
  background: url(../../assets/second/invitation_bg.png) no-repeat;
  background-size: 100% 100%;
}
.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background: url(../../assets/second/barrage_bg.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  animation: opacity 2s forwards;
}
.message-wrapper {
  position: absolute;
  padding: 24 * $vh 24 * $vw;
  width: 100%;
  height: 126 * $vh;
  text-indent: 2em;
  line-height: 78 * $vh;
  box-sizing: border-box;
  bottom: 120 * $vh;
  display: flex;
  justify-content: space-between;
  text-align: left;
  color: #ffffff;
}
.message-input {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 39 * $vw;
}
.message {
  position: absolute;
  top: 840 * $vh;
}
.message-wrapper {
  position: absolute;
  padding: 24 * $vh 24 * $vw;
  width: 100%;
  height: 126 * $vh;
  text-indent: 2em;
  line-height: 78 * $vh;
  box-sizing: border-box;
  top: 1150 * $vh;
  display: flex;
  justify-content: space-between;
  text-align: left;
  color: #ffffff;
}
.message-input {
  width: 100%;
  // width: 530 * $vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 39 * $vw;
}
.message {
  position: absolute;
  top: 840 * $vh;
}
.message-item {
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 48 * $vw;
  color: #ffffff;
  left: 24 * $vw;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 24 * $vh;
  width: 326 * $vw;
  height: 96 * $vh;
  line-height: 40 * $vh;
  padding: 10 * $vh 32 * $vw;
  box-sizing: border-box;
  display: none;
  transform-origin: 0% 50%;
}
.tan1 {
  top: 4 * $vh;
  display: -webkit-box;
  animation: first-tan 2s forwards infinite;
}
.tan2 {
  top: 100 * $vh;
  display: -webkit-box;
  opacity: 0.6;
  transform: scale(0.8, 0.76);
  animation: second-tan 2s forwards infinite;
}
.tan3 {
  top: 200 * $vh;
  display: -webkit-box;
  opacity: 0;
  transform: scale(0.8, 0.76);
  animation: third-tan 2s forwards infinite;
}
@keyframes opacity {
  100% {
    opacity: 1;
  }
}
@keyframes first-tan {
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
@keyframes second-tan {
  100% {
    opacity: 1;
    transform: translateY(-100%) scale(1, 1);
  }
}
@keyframes third-tan {
  100% {
    transform: translateY(-100%) scale(0.8, 0.76);
    opacity: 0.6;
  }
}
.from-right24 {
  position: absolute;
  width: 40 * $vw;
  top: 50%;
  transform: translate(0, -50%);
  right: -1000 * $vw;
  opacity: 0;
  -webkit-animation: fRht24 2s ease forwards;
  -moz-animation: fRht24 2s ease forwards;
  animation: fRht24 2s ease forwards;
}
@-moz-keyframes fRht24 {
  0% {
    right: -1000 * $vw;
    opacity: 0;
  }
  100% {
    right: 24 * $vw;
    opacity: 1;
  }
}
@-webkit-keyframes fRht24 {
  0% {
    right: -1000 * $vw;
    opacity: 0;
  }
  100% {
    right: 24 * $vw;
    opacity: 1;
  }
}
@keyframes fRht24 {
  0% {
    right: -1000 * $vw;
    opacity: 0;
  }
  100% {
    right: 24 * $vw;
    opacity: 1;
  }
}
</style>
