<template>
  <div class="cover">
    <div class="invite_ic_pic" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
    <img
      data-html2canvas-ignore="true"
      src="../../assets/invite_ic_edit.png"
      class="edit"
      v-if="+edit === 1"
      @click="editNative"
      alt="">
    <span class="cover-bg to-show-2" :style="{'background-image': `url(${imgSrc[0]})`}">
      <div class="cover-bg-white from-bottom60 delayP5"></div>
      <img class="from-right30 delay1" src="../../assets/cover_wedding.png" alt="">
      <p class="from-right30 delayP15">{{ extra.groom }}</p>
      <p class="from-right30 delayP15">＆</p>
      <p class="from-right30 delayP15">{{ extra.bride }}</p>
      <span class="from-right30 delay2">{{ extra.time }}</span>
      <span class="from-right30 delayP25">{{ extra.address}}</span>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import shotScreen from "../ShotScreen.vue";
import uploadImage from "../UploadImage";
import utils from "../../libs/utils";

export default {
  name: "cover1",
  props: ["info"],
  data() {
    return {
      current: 0,
      loaded: false,
      imgSrc: this.info.goodsImg,
      extra: JSON.parse(this.info.extra)
    };
  },
  components: {
    shotScreen,
    uploadImage
  },
  computed: {
    ...mapState({
      edit: state => state.edit,
      cardId: state => state.cardId
    })
  },
  created() {
    window.refreshInfo = this.setInfo;
  },
  methods: {
    changeUrl(info) {
      this.$set(this.imgSrc, info.index - 1, info.url);
    },
    setInfo() {
      this.$http
        .post(`${utils.api()}/()/banhunli/card/getInvitationsInfo.gg`, {
          cardId: this.cardId
        })
        .then(response => {
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.extra = res;
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    changePage(index) {
      this.$emit("changePage", index);
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

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";
.cover {
  position: relative;
  width: 100%;
  height: 100vh;
  &-bg {
    width: 100%;
    position: relative;
    height: 100%;
    display: inline-block;
    // background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    &-white {
      width: 410 * $vw;
      height: 676 * $vh;
      background: #fff;
      position: absolute;
      left: 36 * $vw;
      bottom: -1000 * $vh;
    }
    img {
      position: absolute;
      top: 580 * $vh;
      width: 482 * $vw;
      opacity: 1;
      left: 1000 * $vw;
    }
    p {
      position: absolute;
      color: #222222;
      font-size: 48 * $px;
      left: 1000 * $vw;
    }
    span {
      position: absolute;
      display: inline-block;
      color: #222222;
      font-size: 28 * $px;
      text-align: left;
      left: 1000 * $vw;
    }
    p:nth-of-type(1) {
      top: 670 * $vh;
    }
    p:nth-of-type(2) {
      top: 760 * $vh;
    }
    p:nth-of-type(3) {
      top: 850 * $vh;
    }
    span:nth-of-type(1) {
      top: 1010 * $vh;
    }
    span:nth-of-type(2) {
      width: 360 * $vw;
      top: 1080 * $vh;
    }
  }
  .invite_ic_pic {
    position: fixed;
    top: 612 * $vh;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .edit {
    position: absolute;
    bottom: 248 * $vh;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
.cover-bg .delayP5 {
  -moz-animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.cover-bg3 .delay1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.cover-bg .delayP15 {
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.cover-bg .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.cover-bg .delayP25 {
  -moz-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}

.from-bottom60 {
  -webkit-animation: fBtm60 2s forwards;
  -moz-animation: fBtm60 2s forwards;
  animation: fBtm60 2s forwards;
}
@-moz-keyframes fBtm60 {
  0% {
    bottom: -1000 * $vh;
    opacity: 0;
  }
  100% {
    bottom: 120 * $vh;
    opacity: 0.8;
  }
}
@-webkit-keyframes fBtm60 {
  0% {
    bottom: -1000 * $vh;
    opacity: 0;
  }
  100% {
    bottom: 120 * $vh;
    opacity: 0.8;
  }
}
@keyframes fBtm60 {
  0% {
    bottom: -1000 * $vh;
    opacity: 0;
  }
  100% {
    bottom: 120 * $vh;
    opacity: 0.8;
  }
}

.from-right30 {
  -webkit-animation: fRht30 2s ease forwards;
  -moz-animation: fRht30 2s ease forwards;
  animation: fRht30 2s ease forwards;
}
@-moz-keyframes fRht30 {
  0% {
    left: 1000 * $vw;
    opacity: 0;
  }
  100% {
    left: 60 * $vw;
    opacity: 1;
  }
}
@-webkit-keyframes fRht30 {
  0% {
    left: 1000 * $vw;
    opacity: 0;
  }
  100% {
    left: 60 * $vw;
    opacity: 1;
  }
}
@keyframes fRht30 {
  0% {
    left: 1000 * $vw;
    opacity: 0;
  }
  100% {
    left: 60 * $vw;
    opacity: 1;
  }
}
</style>
