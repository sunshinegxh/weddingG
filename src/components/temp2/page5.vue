<template>
  <div class="wrapper">
    <div class="pic_text">
      <span class="page4_text_tian">
        <div class="pic_text_inner"></div>
      </span>
      <span class="page4_text_cheng">
        <div class="pic_text_inner"></div>
      </span>
      <span class="page4_text_jia">
        <div class="pic_text_inner"></div>
      </span>
      <span class="page4_text_ou">
        <div class="pic_text_inner"></div>
      </span>
    </div>
    <div class="text">
      婚到一平慰向平
      <br/>
      况兼佳耦自天成
      <br/>
      迎亲吉日祈招我
      <br/>
      共饮醇醪酒百罂
    </div>
    <div class="page4_ic_cloud_left"></div>
    <div class="page4_ic_cloud_right"></div>
    <div class="page4_frame"></div>
    <div class="page4_pic" :style="{'background-image': `url(${imgArr[0]})`}"></div>
    <div class="invite_ic_pic51" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-2-page-5",
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
  padding-top: 109 * $vh;
  padding-bottom: 92 * $vh;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  background: url(../../assets/second/invitation_bg.png) no-repeat;
  background-size: 100% 100%;
  .invite_ic_pic51 {
    position: absolute;
    top: 850 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
}
.pic_text {
  margin: auto;
  > span {
    display: inline-block;
    width: 108 * $vw;
    height: 108 * $vh;
    margin-right: -16 * $vw;
    opacity: 0;
    animation: move-opacity 2s forwards;
    &:last-child {
      margin-left: 0;
    }
  }
}
.pic_text_inner {
  width: 100%;
  height: 100%;
  animation: roate 2s forwards;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.page4_text_tian {
  transform: translateX(577 * $vw);
  animation-timing-function: ease-in-out;
  .pic_text_inner {
    background-image: url(../../assets/second/page4_text_tian.png);
  }
}
.page4_text_cheng {
  transform: translateX(700 * $vw);
  animation-delay: 0.5s;
  .pic_text_inner {
    background-image: url(../../assets/second/page4_text_cheng.png);
  }
}
.page4_text_jia {
  transform: translateX(800 * $vw);
  animation-delay: 1s;
  .pic_text_inner {
    background-image: url(../../assets/second/page4_text_jia.png);
  }
}
.page4_text_ou {
  transform: translateX(900 * $vw);
  animation-delay: 1.5s;
  .pic_text_inner {
    background-image: url(../../assets/second/page4_text_ou.png);
  }
}
.text {
  width: 300 * $vw;
  height: 216 * $vh;
  margin: 47 * $vh auto 60 * $vh auto;
  font-size: 36 * $vh;
  line-height: 60 * $vh;
  color: #e6bf72;
  opacity: 0;
  animation: opacity 2s 0.5s forwards;
}
.page4_ic_cloud_left {
  position: absolute;
  width: 220 * $vw;
  height: 144 * $vh;
  left: 24 * $vw;
  top: 258 * $vh;
  background: url(../../assets/second/page4_ic_cloud_left.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  transform: translateX(-244 * $vw);
  animation: move-opacity 2s 0.5s forwards;
}
.page4_ic_cloud_right {
  position: absolute;
  width: 180 * $vw;
  height: 116 * $vh;
  right: 24 * $vw;
  top: 156 * $vh;
  background: url(../../assets/second/page4_ic_cloud_right.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  transform: translateX(208 * $vw);
  animation: move-opacity 2s 0.5s forwards;
}
.page4_frame {
  width: 702 * $vw;
  height: 672 * $vh;
  margin: auto;
  box-sizing: border-box;
  background: url(../../assets/second/page4_frame.png) no-repeat;
  background-size: 100% 100%;
  transform: scale(0);
  animation: zoomIn 2s 1s forwards;
}
.page4_pic {
  position: absolute;
  left: 48 * $vw;
  right: 48 * $vw;
  bottom: 135 * $vh;
  height: 634 * $vh;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateY(726 * $vh) scale(1);
  animation: move-opacity 2s 1.5s forwards;
  border-radius: 20 * $vw;
}
@keyframes zoomIn {
  100% {
    transform: scale(1);
  }
}
@keyframes opacity {
  100% {
    opacity: 1;
  }
}
@keyframes move-opacity {
  40% {
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
@keyframes roate {
  0% {
    transform: rotate(320deg);
  }
  100% {
    transform: none;
  }
}
</style>
