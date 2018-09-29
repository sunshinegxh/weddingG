<template>
    <div class="first animate" ref="`section${idx}`">
      <div class="invite_ic_pic1" v-if="edit">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
      </div>
      <div class="invite_ic_pic2" v-if="edit">
        <upload-image :cardId="cardId" :pageId="con.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
      </div>
      <span
        :style="`background: url(${imgArr[0]}) no-repeat;backgroundSize: cover;`"
        :class="{'from-left': isCurrent}">
      </span>
      <div :class="{'scale01': isCurrent, 'delay2': isCurrent, 'first-text': true}">
        <!-- 在固定宽度下面 靠左显示 -->
        <p v-for="(item, index) in con.desc" :key="index">{{ item }}</p>
      </div>
      <span
        :style="`background: url(${imgArr[1]}) no-repeat;backgroundSize: cover;`"
        :class="{'from-right': isCurrent}">
      </span>
    </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";

export default {
  name: "first1",
  props: ["idx", "con", "currentPage"],
  watch: {
    currentPage(newV) {
      this.isCurrent = newV === this.idx;
    }
  },
  computed: {
    ...mapState({
      edit: state => state.edit,
      cardId: state => state.cardId
    })
  },
  created() {
    window.setInfo = this.setInfo;
  },
  data() {
    return {
      // img1: require("../../assets/page1_bg_down.png"),
      // img2: require("../../assets/page1_bg_up.png"),
      imgArr: this.con.goodsImg,
      isCurrent: false
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

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";

.first {
  position: relative;
  width: 100%;
  height: 100%;
  span {
    display: inline-block;
    width: 100%;
    height: 560 * $px;
    background-size: cover;
  }
  span:nth-of-type(2) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &-text {
    width: 428 * $px;
    margin: 50 * $px auto 0;
    font-size: 28 * $px;
    text-align: left;
    color: #222222;
    transform: scale(0);
    p {
      margin: 0;
    }
  }
  .invite_ic_pic1 {
    position: fixed;
    top: 224 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic2 {
    position: fixed;
    top: 1000 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
}
.first .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
</style>
