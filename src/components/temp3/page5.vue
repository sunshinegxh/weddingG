<template>
    <div class="page4">
      <img class="page4_ic_flower from-zoomIn" src="../../assets/third/page4_pic_flower.png" alt="">
      <div class="page4_pic_up from-left0" :style="{'background-image': `url(${imgArr[0]})`}"></div>
      <div class="invite_ic_pic8" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
      </div>

      <div class="page4_pic_middle from-right0" :style="{'background-image': `url(${imgArr[1]})`}"></div>
      <div class="invite_ic_pic9" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
      </div>

      <div class="page4_word delay1 from-oPC">
        <p>你就是我最想要见的人</p>
        <p>那个特别的人</p>
        <p>只要你在身边</p>
        <p>不说话</p>
        <p>我就能感到十分美好</p>
      </div>
      <div class="page4_pic_down delay2 from-left0" :style="{'background-image': `url(${imgArr[2]})`}"></div>
      <div class="invite_ic_pic10" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :cardId="cardId" :pageId="info.pageId" imageSort="3" v-on:change-url="changeUrl"></upload-image>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-3-page-5",
  props: ["info"],
  data() {
    return {
      extra: this.info.extra,
      imgArr: this.info.goodsImg
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

.page4 {
  position: relative;
  width: 100vw;
  height: 100vh;
  img {
    display: block;
  }
  .page4_ic_flower {
    position: absolute;
    width: 318 * $vw;
    height: 210 * $vh;
    top: 128 * $vh;
    right: 24 * $vw;
  }
  .page4_pic_up {
    position: absolute;
    width: 360 * $vw;
    height: 360 * $vh;
    top: 128 * $vh;
    left: 24 * $vw;
    background-size: cover;
  }
  .page4_pic_middle {
    position: absolute;
    width: 318 * $vw;
    height: 460 * $vh;
    top: 348 * $vh;
    margin-right: 24 * $vw;
    background-size: cover;
  }
  .page4_pic_down {
    position: absolute;
    width: 702 * $vw;
    height: 400 * $vh;
    top: 832 * $vh;
    opacity: 0;
    right: 24 * $vw;
    background-size: cover;
  }
  .page4_word {
    opacity: 0;
    position: absolute;
    text-align: left;
    width: 332 * $vw;
    height: 224 * $vh;
    top: 520 * $vh;
    left: 24 * $vw;
    color: #000;
    font-size: 28 * $vw;
    line-height: 20 * $vh;
  }
}

.from-zoomIn {
  animation: zoomIn 1s forwards;
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
    left: 24 * $vw;
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

.invite_ic_pic8 {
  position: absolute;
  top: 255 * $vh;
  left: 26%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.invite_ic_pic9 {
  position: absolute;
  top: 530 * $vh;
  left: 80%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.invite_ic_pic10 {
  position: absolute;
  top: 1000 * $vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}
</style>
