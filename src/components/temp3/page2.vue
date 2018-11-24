<template>
    <div class="first">
      <img class="page1_ic_flower from-rTT" src="../../assets/third/page1_ic_flower.png" alt="">
      <div class="page1_pic_up from-left0" :style="{'background-image': `url(${imgArr[0]})`}"></div>
      <div class="invite_ic_pic2" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
      </div>
      <img class="page1_copywrite from-oPC" src="../../assets/third/page1_copywrite.png" alt="">
      <div class="page1_pic_down from-right0" :style="{'background-image': `url(${imgArr[1]})`}"></div>
      <div class="invite_ic_pic3" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
      </div>
      <img class="page1_ic_vine delay1 from-rTT60" src="../../assets/third/page1_ic_vine.png" alt="">
    </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-3-page-2",
  props: ["info"],
  data() {
    return {
      extra: this.info.extra,
      imgArr: this.info.goodsImg
    };
  },
  computed: {
    ...mapState({
      edit: state => state.edit
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

.first {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    display: block;
  }
  .page1_ic_flower {
    margin: 0 auto;
    margin-top: 20 * $vh;
    width: 88 * $vw;
    height: 88 * $vw;
  }
  .page1_pic_up {
    width: 100%;
    height: 556 * $vh;
    position: relative;
    background-size: cover;
  }
  .page1_copywrite,
  .page1_pic_down {
    width: 565 * $vw;
    float: right;
    position: relative;
    z-index: 2;
  }
  .page1_pic_down {
    height: 406 * $vh;
    background-size: cover;
  }
  .page1_ic_vine {
    width: 150 * $vw;
    float: right;
    opacity: 0;
    transform-origin: right bottom;
    position: relative;
    z-index: 1;
  }
}

.from-rTT {
  animation: rTT 4s ease-out infinite;
}
@keyframes rTT {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
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

.invite_ic_pic2 {
  position: absolute;
  top: 330 * $vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.invite_ic_pic3 {
  position: absolute;
  top: 900 * $vh;
  left: 62%;
  transform: translate(-50%, 0);
  z-index: 1000;
}
</style>
