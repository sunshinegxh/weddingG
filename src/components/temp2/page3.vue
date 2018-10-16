<template>
  <div class="wrapper">
    <div class="page2_frame right">
      <div class="pic page2_pic_up" :style="{'background-image': `url(${imgArr[0]})`}"></div>
    </div>
    <div class="invite_ic_pic31" v-if="edit" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="page2_copywriting"></div>
    <div class="page2_frame left">
      <div class="pic page2_pic_down" :style="{'background-image': `url(${imgArr[1]})`}"></div>
    </div>
    <div class="invite_ic_pic32" v-if="edit" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="page2_ic_cloud"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-2-page-3",
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
  padding-top: 128 * $vh;
  padding-bottom: 71 * $vh;
  box-sizing: border-box;
  position: relative;
  background: url(../../assets/second/invitation_bg.png) no-repeat;
  background-size: 100% 100%;
  .invite_ic_pic31 {
    position: absolute;
    top: 350 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic32 {
    position: absolute;
    top: 1000 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
}
.page2_frame {
  width: 702 * $vw;
  height: 490 * $vh;
  padding: 15 * $vh 15 * $vw;
  box-sizing: border-box;
  margin: auto;
  background: url(../../assets/second/page2_frame.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  animation: opacity 2s forwards;
}
.page2_frame.right {
  transform: translateX(100%);
}
.page2_frame.left {
  transform: translateX(-100%);
}
.pic {
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.page2_copywriting {
  width: 702 * $vw;
  height: 106 * $vh;
  margin: 27 * $vh auto 22 * $vw auto;
  background: url(../../assets/second/page2_copywriting.png) no-repeat;
  background-size: 100% 100%;
  transform: scale(0);
  animation: zoomIn 2s 0.5s forwards;
}
.page2_ic_cloud {
  width: 240 * $vw;
  height: 156 * $vh;
  position: absolute;
  right: 24 * $vw;
  top: 487 * $vh;
  background: url(../../assets/second/page2_ic_cloud.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(264 * $vw);
  opacity: 0;
  animation: opacity 2s 1s forwards;
}
@keyframes opacity {
  60% {
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
@keyframes zoomIn {
  100% {
    transform: scale(1);
  }
}
</style>
