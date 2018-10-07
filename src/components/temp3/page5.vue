<template>
    <div class="page4">
      <img class="page4_ic_flower from-zoomIn" src="../../assets/third/page4_pic_flower.png" alt="">
      <img class="page4_pic_up from-left0" :src="imgArr[0]" alt="">
      <div class="invite_ic_pic8" v-if="edit">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="8" v-on:change-url="changeUrl"></upload-image>
      </div>

      <img class="page4_pic_middle from-right0" :src="imgArr[1]" alt="">
      <div class="invite_ic_pic9" v-if="edit">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="9" v-on:change-url="changeUrl"></upload-image>
      </div>

      <div class="page4_word delay1 from-oPC">
        <p>你就是我最想要见的人</p>
        <p>那个特别的人</p>
        <p>只要你在身边</p>
        <p>不说话</p>
        <p>我就能感到十分美好</p>
      </div>
      <img class="page4_pic_down delay2 from-left0" :src="imgArr[2]" alt="">
      <div class="invite_ic_pic10" v-if="edit">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="10" v-on:change-url="changeUrl"></upload-image>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-3-page-5",
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

.page4 {
  position: relative;
  width: 100vw;
  height: 100vh;
  img {
    display: block;
  }
  .page4_ic_flower {
    position: absolute;
    width: 318 * $px;
    height: 210 * $px;
    top: 128 * $px;
    right: 24 * $px;
  }
  .page4_pic_up {
    position: absolute;
    width: 360 * $px;
    height: 360 * $px;
    top: 128 * $px;
    left: 24 * $px;
  }
  .page4_pic_middle {
    position: absolute;
    width: 318 * $px;
    height: 460 * $px;
    top: 348 * $px;
    right: 24 * $px;
  }
  .page4_pic_down {
    position: absolute;
    width: 702 * $px;
    height: 400 * $px;
    top: 832 * $px;
    opacity: 0;
    right: 24 * $px;
  }
  .page4_word {
    opacity: 0;
    position: absolute;
    text-align: left;
    width: 332 * $px;
    height: 224 * $px;
    top: 520 * $px;
    left: 24 * $px;
    color: #000;
    font-size: 28 * $px;
    line-height: 20 * $px;
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

.invite_ic_pic8 {
  position: absolute;
  top: 250 * $px;
  left: 25%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.invite_ic_pic9 {
  position: absolute;
  top: 500 * $px;
  left: 80%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.invite_ic_pic10 {
  position: absolute;
  top: 1000 * $px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}
</style>
