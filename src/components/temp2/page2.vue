<template>
  <div class="wrapper">
    <div class="left">
      <div class="page1_pic_up" :style="{'background-image': `url(${imgArr[0]})`}"></div>
      <div class="page1_pic_down" :style="{'background-image': `url(${imgArr[1]})`}"></div>
    </div>
    <div class="invite_ic_pic21" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="invite_ic_pic22" v-if="+edit === 1" data-html2canvas-ignore="true">
      <upload-image :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
    </div>
    <div class="right">
      <div class="text">
        遇到你
        <br/>
        就像浩劫余生
        <br/>
        漂流过沧海
        <br/>
        终见陆地
      </div>
      <div class="cloud"><div class="cover_cloud_middle"></div></div>
      <div>
        <div class="big-text page1_text_xi"></div>
        <div class="big-text page1_text_jie"></div>
        <div class="big-text page1_text_liang"></div>
        <div class="big-text page1_text_yuan"></div>
      </div>
    </div>
    <div class="page1_cloud_gold"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "template-2-page-2",
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
  height: 100%;
  padding-top: 152 * $vh;
  padding-bottom: 110 * $vh;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  text-align: left;
  background: url(../../assets/second/invitation_bg.png) no-repeat;
  background-size: 100% 100%;
  .invite_ic_pic21 {
    position: absolute;
    top: 400 * $px;
    left: 30%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic22 {
    position: absolute;
    top: 950 * $px;
    left: 30%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
}
.left {
  display: inline-block;
  width: 400 * $vw;
  padding-left: 24 * $vw;
  margin-right: 48 * $vw;
  overflow: hidden;
}
.right {
  width: 253 * $vw;
  padding-right: 24 * $vw;
  display: inline-block;
  overflow: hidden;
}
.page1_pic_up {
  height: 600 * $vh;
  margin-bottom: 24 * $vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: translateX(-100%);
  opacity: 0;
  animation: opacity 2s forwards;
}
.page1_pic_down {
  height: 448 * $vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: translateX(-100%);
  opacity: 0;
  animation: opacity 2s 0.5s forwards;
}
.text {
  color: #e6bf72;
  font-size: 36 * $vh;
  line-height: 60 * $vh;
  text-align: left;
  transform: translateX(277 * $vw);
  opacity: 0;
  animation: opacity 2s 1s forwards;
}
.cloud {
  overflow: hidden;
}
.cover_cloud_middle {
  float: right;
  width: 130 * $vw;
  height: 80 * $vh;
  background: url(../../assets/second/cover_cloud_middle.png) no-repeat;
  background-size: 100% 100%;
  transform: translateX(154 * $vw);
  opacity: 0;
  animation: opacity 2s 1.5s forwards;
}
.big-text {
  width: 180 * $vw;
  height: 181 * $vh;
  margin-bottom: -16 * $vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: translateY(80%);
  opacity: 0;
  animation-name: opacity;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.big-text:last-child {
  margin-bottom: 0;
}
.page1_text_xi {
  background-image: url(../../assets/second/page1_text_xi.png);
  animation-delay: 1.5s;
}
.page1_text_jie {
  background-image: url(../../assets/second/page1_text_jie.png);
  animation-delay: 2s;
}
.page1_text_liang {
  background-image: url(../../assets/second/page1_text_liang.png);
  animation-delay: 2.5s;
}
.page1_text_yuan {
  background-image: url(../../assets/second/page1_text_yuan.png);
  animation-delay: 3s;
}
.page1_cloud_gold {
  position: absolute;
  bottom: 97 * $vh;
  left: 390 * $vw;
  width: 140 * $vw;
  height: 70 * $vh;
  background: url(../../assets/second/page1_cloud_gold.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  transform: translateX(360 * $vw);
  animation: opacity 2s 2s forwards;
}
@keyframes opacity {
  100% {
    transform: none;
    opacity: 1;
  }
}
</style>
