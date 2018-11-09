<template>
  <div class="wrapper">
    <div class="bg"></div>
    <div class="message-wrapper">
      <div class="message-input" @click="showBless">写下你的祝福</div>
    </div>
    <div class="message">
      <div class="message-item" :class="getClass(i)" v-for="(text, i) in showData" :key="i">
        {{ text }}
      </div>
    </div>
    <send-bless v-show="showB" @send="send"></send-bless>
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
      showB: false
    };
  },
  created() {
    this.getDanInfo();
  },
  computed: {
    ...mapState({
      edit: state => state.edit
    })
  },
  components: {
    sendBless
  },
  unmounted() {
    clearTimeout(this.timmer);
  },
  methods: {
    showBless() {
      if (+this.edit === 2) {
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
        this.index = (this.index + 1) % this.tanData.length;
        this.showData.splice(this.showIndex, 1, this.tanData[this.index]);
        this.showIndex = (this.showIndex + 1) % SIZE;
        this.timmer = this.startTimer();
      }, 2000);
    },
    getDanInfo() {
      this.$http
        .post(`http://${utils.api()}/()/banhunli/card/getPublishWishList.gg`, {
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
            this.showData = Array.from(Array(SIZE), (i, item) => {
              const pos = item % this.tanData.length;
              return this.tanData[pos];
            });
            this.index = 2 % this.tanData.length;
            this.showIndex = 0;
            this.timmer = null;
            this.startTimer();
          } else {
            console.log("getPublishWishList:", response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    send() {
      this.showB = false;
    }
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
/* .message-item:nth-of-type(1) {
  display: none;
}
.message-item:nth-of-type(2) {
  animation: first-tan 2s forwards infinite;
}
.message-item:nth-of-type(3) {
  opacity: 0.6;
  transform: scale(0.8, 0.76);
  animation: second-tan 2s forwards infinite;
}
.message-item:nth-of-type(4) {
  opacity: 0;
  transform: scale(0.8, 0.76);
  animation: third-tan 2s forwards infinite;
} */
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
</style>
