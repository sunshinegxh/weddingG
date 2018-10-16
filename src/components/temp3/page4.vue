<template>
    <div class="page3">
      <img class="page3_ic_flower from-zoomIn" src="../../assets/third/page3_ic_flower.png" alt="">
      <img class="page3_pic_left from-left0" :src="imgArr[0]" alt="">
      <div class="invite_ic_pic5" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="5" v-on:change-url="changeUrl"></upload-image>
      </div>

      <img class="page3_pic_right from-right0" :src="imgArr[1]" alt="">
      <div class="invite_ic_pic6" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="6" v-on:change-url="changeUrl"></upload-image>
      </div>

      <img class="page3_copywrite from-oPC" src="../../assets/third/page3_pic_copywrite.png" alt="">
      <img class="page3_pic_down delay1 from-bottom120" :src="imgArr[2]" alt="">
      <div class="invite_ic_pic7" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="7" v-on:change-url="changeUrl"></upload-image>
      </div>

      <img class="page3_ic_flowertwo delay1 from-right-top" src="../../assets/third/page3_ic_flowertwo.png" alt="">
    </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-3-page-4",
  props: ["con"],
  data() {
    return {
      extra: this.con.extra,
      imgArr: this.con.goodsImg
    };
  },
  computed: {
    ...mapState({
      edit: state => state.edit,
      cardId: state => state.cardId
    })
  },
  methods: {
    changeUrl(info) {
      this.$set(this.imgArr, info.index - 1, info.url);
    }
  },
  components: {
    uploadImage
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";

.page3 {
  position: relative;
  width: 100vw;
  height: 100vh;
  img {
    display: block;
  }
  .page3_ic_flower {
    width: 156 * $px;
    height: 156 * $px;
    left: 0;
    top: 20 * $px;
    opacity: 0;
    z-index: 1;
    position: absolute;
  }
  .page3_pic_left {
    position: absolute;
    width: 340 * $px;
    height: 518 * $px;
    margin-top: 128 * $px;
  }
  .page3_pic_right {
    width: 340 * $px;
    height: 518 * $px;
    position: absolute;
    margin-right: 24 * $px;
    margin-top: 128 * $px;
  }
  .page3_copywrite {
    width: 702 * $px;
    height: 108 * $px;
    position: absolute;
    top: 646 * $px;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
  }
  .page3_pic_down {
    position: absolute;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 0%);
    width: 702 * $px;
    height: 460 * $px;
  }
  .page3_ic_flowertwo {
    position: absolute;
    opacity: 0;
    width: 108 * $px;
    height: 190 * $px;
    margin-top: -100 * $px;
    z-index: 1;
  }
}

.from-oPC {
  animation: oPC 2s ease-out forwards;
}
@keyframes oPC {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.from-left0 {
  animation: fLft0 2s ease forwards;
}
@keyframes fLft0 {
  0% {
    left: -300 * $px;
    opacity: 0;
  }
  100% {
    left: 24 * $px;
    opacity: 1;
  }
}

.from-right0 {
  animation: fRht0 2s ease forwards;
}
@keyframes fRht0 {
  0% {
    right: -300 * $px;
    opacity: 0;
  }
  100% {
    right: 0 * $px;
    opacity: 1;
  }
}

.from-bottom120 {
  animation: fBtm120 2s forwards;
}
@keyframes fBtm120 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 120 * $px;
    opacity: 0.8;
  }
}

.from-zoomIn {
  animation: zoomIn 1.5s forwards;
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.from-right-top {
  animation: fRtT 2s ease forwards;
}
@keyframes fRtT {
  0% {
    top: 850 * $px;
    right: -300 * $px;
    opacity: 0;
  }
  100% {
    top: 1180 * $px;
    right: 0 * $px;
    opacity: 1;
  }
}

.invite_ic_pic5 {
  position: absolute;
  top: 300 * $px;
  left: 25%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.invite_ic_pic6 {
  position: absolute;
  top: 300 * $px;
  left: 75%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.invite_ic_pic7 {
  position: absolute;
  top: 900 * $px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}
</style>
