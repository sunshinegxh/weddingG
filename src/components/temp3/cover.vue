<template>
  <div class="cover">
    <span class="border-bg cover-bg-left from-left0"></span>
    <span class="border-bg cover-bg-bottom from-bottom0"></span>
    <span class="border-bg cover-bg-right from-right0"></span>
    <span class="border-bg cover-bg-top from-top0"></span>

    <div class="invite_ic_pic1" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>

    <img
      data-html2canvas-ignore="true"
      src="../../assets/invite_ic_edit.png"
      class="edit3"
      v-if="+edit === 1"
      @click="editNative"
      alt="">

    <div class="cover-bg3">
      <span class="cover_pic_copywrite delay1 from-top0"></span>
      <div class="role name delayP15 from-top200">
        <span class="role-1">{{ extra.groom }}</span>
        <i class="heart">&</i>
        <span class="role-2">{{ extra.bride }}</span>
      </div>
      <!-- <span class="name delayP15 from-top200">{{extra.groom}} & {{extra.bride}}</span> -->
      <div class="cover_pic scale01 delayP25" :style="{'background-image': `url(${imgArr[0]})`}"></div>
      <span class="address delay2 from-bottom100">{{extra.address}}</span>
      <span class="date delay3 from-bottom204">{{extra.time}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";
import utils from "../../libs/utils";

export default {
  name: "cover3",
  props: ["info"],
  data() {
    return {
      current: 0,
      loaded: false,
      extra: JSON.parse(this.info.extra),
      imgArr: this.info.goodsImg
    };
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
      this.$set(this.imgArr, info.index - 1, info.url);
    },
    changePage(index) {
      this.$emit("changePage", index);
    },
    comClass() {
      return {
        toRead: true,
        big: this.current === 1
      };
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
  },
  components: {
    uploadImage
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";
.cover {
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: serif;
  &-bg3 {
    width: 702 * $vw;
    height: 1072 * $vh;
    position: absolute;
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // margin: auto;
    left: 50%;
    top: 50%;
    // transform: translate(-50%, -50%);
    margin-left: -351 * $vw;
    margin-top: -536 * $vh;
    background: url("../../assets/third/cover_bg.png") no-repeat;
    background-size: contain;
    .role {
      font-size: 48 * $vh;
      line-height: 48 * $vh;
      margin-top: 35 * $vh;
      opacity: 0;
      // transform: translateY(48 * $vh);
      // animation: opacity 2s 2s forwards;
      display: flex;
      > span {
        flex: 1;
      }
      .role-1 {
        text-align: right;
      }
      .role-2 {
        text-align: left;
      }
    }
    .heart {
      display: inline-block;
      width: 48 * $vw;
      height: 48 * $vh;
      margin: auto 46 * $vw;
      vertical-align: middle;
      // background: url(../../assets/second/cover_ic_heart.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .border-bg {
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .cover_pic_copywrite {
    width: 702 * $vw;
    height: 200 * $vh;
    display: inline-block;
    background: url("../../assets/third/cover_pic_copywrite.png") no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    top: -300 * $vh;
  }
  .name {
    position: absolute;
    left: 0;
    right: 0;
    top: -300 * $vh;
    font-size: 48 * $vw;
    color: #000;
    margin: 0 auto;
  }
  .cover_pic {
    width: 544 * $vw;
    height: 520 * $vh;
    position: absolute;
    left: 50%;
    margin-left: -272 * $vw;
    // left: 0;
    // right: 0;
    top: 280 * $vh;
    // margin: 0 auto;
    -webkit-transform: scale(0);
    transform: scale(0);
    background-size: cover;
  }
  .address {
    position: absolute;
    left: 0;
    right: 0;
    width: 480 * $vw;
    text-align: center;
    bottom: -300 * $vh;
    font-size: 36 * $vw;
    color: #000;
    margin: 0 auto;
  }
  .date {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: -300 * $vh;
    font-size: 36 * $vw;
    color: #000;
    margin: 0 auto;
  }
  &-bg-left {
    left: 0;
    top: 0;
    width: 340 * $vw;
    height: 1206 * $vh;
    display: inline-block;
    background: url("../../assets/third/cover_pic_left.png") no-repeat;
  }
  &-bg-right {
    right: 0;
    top: 70 * $vh;
    width: 230 * $vw;
    height: 1178 * $vh;
    background: url("../../assets/third/cover_pic_right.png") no-repeat;
  }
  &-bg-top {
    top: 0;
    right: 0;
    width: 400 * $vw;
    height: 200 * $vh;
    background: url("../../assets/third/cover_pic_up.png") no-repeat;
  }
  &-bg-bottom {
    bottom: 0;
    left: 0;
    width: 750 * $vw;
    height: 228 * $vh;
    background: url("../../assets/third/cover_pic_down.png") no-repeat;
  }
}

.cover-bg3 .delay1 {
  animation-delay: 1s;
}

.cover-bg3 .delayP15 {
  animation-delay: 1.5s;
}

.cover-bg3 .delay2 {
  animation-delay: 2s;
}

.cover-bg3 .delayP25 {
  animation-delay: 2.5s;
}

.cover-bg3 .delay3 {
  animation-delay: 3s;
}

.from-bottom204 {
  animation: fBtm204 2s ease forwards;
}
@keyframes fBtm204 {
  0% {
    bottom: -300 * $vh;
    opacity: 0;
  }
  100% {
    bottom: 204 * $vh;
    opacity: 0.8;
  }
}

.from-bottom100 {
  animation: fBtm100 2s ease forwards;
}
@keyframes fBtm100 {
  0% {
    bottom: -300 * $vh;
    opacity: 0;
  }
  100% {
    bottom: 100 * $vh;
    opacity: 0.8;
  }
}

.from-top200 {
  animation: fTop200 2s ease forwards;
}
@keyframes fTop200 {
  0% {
    top: -300 * $vh;
    opacity: 0;
  }
  100% {
    top: 190 * $vh;
    opacity: 0.8;
  }
}

.from-top0 {
  animation: fTop0 2s forwards;
}
@keyframes fTop0 {
  0% {
    top: -300 * $vh;
    opacity: 0;
  }
  100% {
    top: 0 * $vh;
    opacity: 0.8;
  }
}

.from-bottom0 {
  animation: fBtm0 2s forwards;
}
@keyframes fBtm0 {
  0% {
    bottom: -300 * $vh;
    opacity: 0;
  }
  100% {
    bottom: 0 * $vh;
    opacity: 0.8;
  }
}

.from-right0 {
  animation: fRht0 2s ease forwards;
}
@keyframes fRht0 {
  0% {
    right: -300 * $vw;
    opacity: 0;
  }
  100% {
    right: 0 * $vw;
    opacity: 1;
  }
}

.from-left0 {
  animation: fLft0 2s ease forwards;
}
@keyframes fLft0 {
  0% {
    left: -300 * $vw;
    opacity: 0;
  }
  100% {
    left: 0 * $vw;
    opacity: 1;
  }
}
.invite_ic_pic1 {
  position: fixed;
  top: 620 * $vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}
.edit3 {
  width: 112 * $vw;
  height: 112 * $vw;
  z-index: 1000;
  position: absolute;
  bottom: 220 * $vh;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
