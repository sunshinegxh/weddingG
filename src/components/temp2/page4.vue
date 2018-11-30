<template>
  <div class="wrapper">
    <div class="page3_pic_up" :style="{'background-image': `url(${imgArr[0]})`}"></div>
    <div class="invite_ic_pic41" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="page3_ic_cloud"></div>
    <div>
      <div class="text">
        我的肩膀很窄
        <br />
        只够你一人依靠
        <br />
        我的心很小
        <br />
        只能容下你一下
        <br />
        我的手不大
        <br />
        只能刚好握住你的手
        <br />
        我脾气不好
        <br />
        却能对你温柔以待
      </div>
      <div class="page3_pic_down" :style="{'background-image': `url(${imgArr[1]})`}"></div>
      <div class="invite_ic_pic42" v-if="+edit === 1" data-html2canvas-ignore="true">
        <upload-image :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
      </div>
    </div>
    <div class="page1_cloud_gold"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-2-page-4",
  props: ["info"],
  computed: {
    ...mapState({
      edit: state => state.edit
    })
  },
  data() {
    return {
      imgArr: this.info.goodsImg
    };
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
<style lang="scss" scoped>
@import "../../common.scss";
.wrapper {
  position: relative;
  padding-top: 136 * $vh;
  padding-bottom: 112 * $vh;
  box-sizing: border-box;
  background: url(../../assets/second/invitation_bg.png) no-repeat;
  background-size: 100% 100%;
  .invite_ic_pic41 {
    position: absolute;
    top: 350 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic42 {
    position: absolute;
    top: 870 * $px;
    left: 75%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
}
.page3_pic_up {
  width: 702 * $vw;
  height: 480 * $vh;
  margin: 0 auto 48 * $vh auto;
  background-size: cover;
  transform: translateX(-100%);
  background-repeat: no-repeat;
  opacity: 0;
  animation: move-opacity 2s forwards;
  border-radius: 20 * $vw;
}
.page3_ic_cloud {
  position: absolute;
  top: 494 * $vh;
  right: 24 * $vw;
  width: 260 * $vw;
  height: 170 * $vh;
  background: url(../../assets/second/page3_ic_cloud.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(100%);
  opacity: 0;
  animation: move-opacity 2s 1.5s forwards;
}
.text {
  display: inline-block;
  vertical-align: top;
  width: 330 * $vw;
  margin-right: 47 * $vw;
  color: #e6bf72;
  font-size: 36 * $vh;
  line-height: 60 * $vh;
  text-align: left;
  opacity: 0;
  animation: opacity 2s 2s forwards;
}
.page3_pic_down {
  display: inline-block;
  width: 332 * $vw;
  height: 518 * $vh;
  background-size: cover;
  transform: translateX(100%);
  background-repeat: no-repeat;
  opacity: 0;
  border-radius: 20 * $vw;
  animation: move-opacity 2s 0.5s forwards;
}
.page1_cloud_gold {
  position: absolute;
  width: 140 * $vw;
  height: 70 * $vh;
  bottom: 152 * $vh;
  left: 288 * $vw;
  background: url(../../assets/second/page1_cloud_gold.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(-428 * $vw);
  opacity: 0;
  animation: move-opacity 2s 2s forwards;
}
@keyframes opacity {
  100% {
    opacity: 1;
  }
}
@keyframes move-opacity {
  60% {
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
</style>
