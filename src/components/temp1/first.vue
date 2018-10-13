<template>
    <div class="first animate">
      <div class="invite_ic_pic1" v-if="edit" data-html2canvas-ignore="true">
        <upload-image :pageId="info.pageId" imageSort="1" v-on:change-url="changeUrl"></upload-image>
      </div>
      <div class="invite_ic_pic2" v-if="edit" data-html2canvas-ignore="true">
        <upload-image :pageId="info.pageId" imageSort="2" v-on:change-url="changeUrl"></upload-image>
      </div>
      <img
        src="../../assets/invite_ic_edit.png"
        class="edit"
        v-if="edit && textEdit"
        @click="changeDescEdit"
        alt=""
        data-html2canvas-ignore="true">
      <span
        :style="`backgroundImage: url(${imgArr[0]})`"
        class="from-left">
      </span>
      <!-- 在固定宽度下面 靠左显示 -->
      <!-- <p v-for="(item, index) in extra" :key="index">{{ item }}</p> -->
      <textarea
        ref="text"
        class="scale01 delay2 first-text"
        cols="30"
        rows="3"
        v-model="extra"
        @blur.prevent="changeDesc">
      </textarea>
      <span
        :style="`backgroundImage: url(${imgArr[1]})`"
        class="from-right">
      </span>
    </div>
</template>

<script>
import { mapState } from "vuex";
import uploadImage from "../UploadImage";
import toast from "../common/toast";

export default {
  name: "first1",
  props: ["info"],
  computed: {
    ...mapState({
      edit: state => state.edit,
      cardId: state => state.cardId
    })
  },
  created() {
    window.setInfo = this.setInfo;
    this.extra = this.info.extra.join("\n");
  },
  data() {
    return {
      imgArr: this.info.goodsImg,
      extra: "",
      textEdit: true
    };
  },
  methods: {
    changeUrl(info) {
      this.$set(this.imgArr, info.index - 1, info.url);
    },
    changeDescEdit() {
      this.textEdit = false;
      this.$refs.text.focus();
    },
    changeDesc() {
      let ex = this.extra.split(/[\n\t]+/g);
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/card/updatePageExtra.gg", {
          cardId: this.cardId,
          pageId: this.info.pageId,
          extra: ex
        })
        .then(response => {
          this.textEdit = true;
          if (response.body.code === "0000") {
            toast("修改成功");
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
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
  height: 100vh;
  .edit {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    display: inline-block;
    width: 100%;
    height: 560 * $px;
    // background-size: cover;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  span:nth-of-type(2) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &-text {
    width: 440 * $vw;
    height: 120 * $vh;
    margin: 40 * $px auto 0;
    font-size: 26 * $vh;
    text-align: left;
    color: #222222;
    padding: 0;
    transform: scale(0);
    border: 0;
    p {
      margin: 0;
    }
  }
  .invite_ic_pic1 {
    position: absolute;
    top: 224 * $px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
  }
  .invite_ic_pic2 {
    position: absolute;
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
