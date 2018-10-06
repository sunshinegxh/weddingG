<template>
    <div class="first animate" ref="`section${idx}`">
      <img class="page1_ic_flower" :class="{'from-rTT': isCurrent}" src="../../assets/third/page1_ic_flower.png" alt="">
      <img class="page1_pic_up" :class="{'from-left0': isCurrent}" :src="imgArr[0]" alt="">
      <div class="invite_ic_pic2" v-if="edit">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
      </div>
      <img class="page1_copywrite" :class="{'from-oPC': isCurrent}" src="../../assets/third/page1_copywrite.png" alt="">
      <img class="page1_pic_down" :class="{'from-right0': isCurrent}" :src="imgArr[0]" alt="">
      <div class="invite_ic_pic3" v-if="edit">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="3" v-on:change-url="changeUrl"></upload-image>
      </div>
      <img class="page1_ic_vine delay1" :class="{'from-rTT60': isCurrent}" src="../../assets/third/page1_ic_vine.png" alt="">
    </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "first3",
  props: ["idx", "con", "currentPage"],
  watch: {
    currentPage(newV) {
      this.isCurrent = newV === this.currentPage;
    }
  },
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

.first {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    display: block;
  }
  .page1_ic_flower {
    margin: 0 auto;
    margin-top: 20 * $px;
    width: 88 * $px;
    height: 88 * $px;
  }
  .page1_pic_up {
    width: 100%;
    position: relative;
  }
  .page1_copywrite,
  .page1_pic_down {
    width: 566 * $px;
    float: right;
    position: relative;
    z-index: 2;
  }
  .page1_ic_vine {
    width: 150 * $px;
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
    left: -300 * $px;
    opacity: 0;
  }
  100% {
    left: 0 * $px;
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

.invite_ic_pic2 {
  position: absolute;
  top: 300 * $px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.invite_ic_pic3 {
  position: absolute;
  top: 900 * $px;
  left: 70%;
  transform: translate(-50%, 0);
  z-index: 1000;
}
</style>
