<template>
    <div class="page2">
      <img class="page2_copywrite delay0_5 from-top0" src="../../assets/third/page2_pic_copywrite.png" alt="">
      <img class="page2_main delay1 from-bottom300" :src="imgArr[0]" alt="">
      <div class="invite_ic_pic4" v-if="edit" data-html2canvas-ignore="true">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="4" v-on:change-url="changeUrl"></upload-image>
      </div>
      <img class="page2_ic_flower_rotate from-rTT" src="../../assets/third/page2_ic_flower.png" alt="">
      <img class="page2_ic_flower_left delay2 from-left50" src="../../assets/third/page2_ic_flower2.png" alt="">
      <img class="page2_ic_flower_right delay3 from-right0"  src="../../assets/third/page2_ic_vine.png" alt="">
      <div class="word delay1 from-top500">
        <p>很想和你拥有一个很长很长的未来</p>
        <p>很想和你得到所有人的祝福</p>
        <p>很想陪你走完你的一生</p>
        <p>彼此温暖 万不辜负</p>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-3-page-3",
  props: ["con"],
  data() {
    return {
      extra: this.con.extra,
      imgArr: this.con.goodsImg,
      isCurrent: true
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

.page2 {
  position: relative;
  width: 100vw;
  height: 100vh;
  img {
    display: block;
  }
  .page2_ic_flower_rotate {
    width: 106 * $px;
    height: 106 * $px;
    position: absolute;
    top: 930 * $px;
    z-index: 2;
  }
  .page2_main {
    position: absolute;
    width: 700 * $px;
    height: 880 * $px;
    z-index: 2;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .page2_copywrite {
    opacity: 0;
    width: 702 * $px;
    position: relative;
    margin-top: 40 * $px;
    z-index: 2;
  }
  .page2_ic_flower_left {
    position: absolute;
    opacity: 0;
    top: 1100 * $px;
    width: 138 * $px;
    height: 150 * $px;
    z-index: 5;
  }
  .page2_ic_flower_right {
    position: absolute;
    opacity: 0;
    top: 1030 * $px;
    width: 118 * $px;
    height: 220 * $px;
    z-index: 5;
  }
  .word {
    position: absolute;
    color: #000;
    left: 50%;
    opacity: 0;
    width: 700 * $px;
    transform: translate(-50%, 0%);
    font-size: 28 * $px;
    line-height: 24 * $px;
  }
}

.from-rTT {
  animation: zoomIn 2s forwards, rTT 4s linear infinite 2s;
}
@keyframes rTT {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.from-rTT60 {
  animation: rTT60 2s ease-out forwards;
}
@keyframes rTT60 {
  0% {
    transform: rotateZ(60deg);
    opacity: 0;
  }
  100% {
    transform: rotateZ(0deg);
    opacity: 1;
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

.from-left50 {
  animation: fLft50 2s ease forwards;
}
@-moz-keyframes fLft50 {
  0% {
    right: 50%;
    opacity: 0;
  }
  100% {
    right: 72 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fLft50 {
  0% {
    right: 50%;
    opacity: 0;
  }
  100% {
    right: 72 * $px;
    opacity: 1;
  }
}
@keyframes fLft50 {
  0% {
    right: 50%;
    opacity: 0;
  }
  100% {
    right: 72 * $px;
    opacity: 1;
  }
}

.from-top0 {
  animation: fTop0 2s forwards;
}
@-moz-keyframes fTop0 {
  0% {
    top: -300 * $px;
    opacity: 0;
  }
  100% {
    top: 0 * $px;
    opacity: 0.8;
  }
}
@-webkit-keyframes fTop0 {
  0% {
    top: -300px;
    opacity: 0;
  }
  100% {
    top: 0 * $px;
    opacity: 0.8;
  }
}
@keyframes fTop0 {
  0% {
    top: -300 * $px;
    opacity: 0;
  }
  100% {
    top: 0 * $px;
    opacity: 0.8;
  }
}

.from-top500 {
  animation: fTop500 2s forwards;
}
@keyframes fTop500 {
  0% {
    top: 500 * $px;
    opacity: 0;
  }
  100% {
    top: 980 * $px;
    opacity: 0.8;
  }
}

.from-right0 {
  animation: fRht0 2s ease forwards;
}
@keyframes fRht0 {
  0% {
    right: 50%;
    opacity: 0;
  }
  100% {
    right: 0 * $px;
    opacity: 1;
  }
}

.from-bottom300 {
  animation: fBtm300 2s forwards;
}
@keyframes fBtm300 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 360 * $px;
    opacity: 0.8;
  }
}

.invite_ic_pic4 {
  position: absolute;
  top: 450 * $px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}
</style>
