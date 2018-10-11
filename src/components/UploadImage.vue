<template>
  <div class="upload">
    <input
      :id="`${_uid}-upload`"
      enctype="multipart/form-data"
      name="file"
      type="file"
      accept="image/png,image/gif,image/jpeg"
      @change="replacePageImg($event)"
    />
    <label :for="`${_uid}-upload`" class="file"/>
  </div>
</template>

<script>
import toast from "./common/toast";
import html2canvas from "html2canvas";
import { mapState } from "vuex";

export default {
  props: ["pageId", "imageSort"],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cardId: state => state.cardId
    })
  },
  methods: {
    replacePageImg(e) {
      let file = e.target.files[0];
      let param = new FormData();
      param.append("file", file);
      this.$http
        .post(
          `http://47.105.43.207:80/()/banhunli/card/replacePageImg.gg?cardId=${
            this.cardId
          }&pageId=${this.pageId}&imageSort=${this.imageSort}`,
          param,
          {
            headers: { "Content-Type": "multipart/form-data" }
          }
        )
        .then(response => {
          toast("上传成功！");
          this.$emit("change-url", {
            url: response.body.data.imgUrl,
            index: this.imageSort
          });
          setTimeout(() => {
            this.shotScreen();
            console.log("uploadShotScreen:", response.body.data.imgUrl);
          }, 0);
        })
        .catch(e => {
          document.write(e);
        });
    },
    shotScreen() {
      let self = this;
      html2canvas(document.body, {
        proxy: true,
        useCORS: true,
        foreignObjectRendering: true,
        backgroundColor: "#fff",
        scale: 1,
        width: window.innerWidth,
        height: window.innerHeight,
        logging: false
      }).then(function(canvas) {
        document.body.appendChild(canvas);
        var link = document.createElement("a");
        let shotScreen = canvas.toDataURL("image/png");
        link.href = shotScreen;
        link.download = "shotScreen.png";
        link.click();
        // var image = new Image();
        // image.src = "http://cued.xunlei.com/demos/publ/img/P_006.jpg"
        // document.body.appendChild(image);
        self.uploadShotScreen(shotScreen);
      });
    },
    uploadShotScreen(img) {
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/card/uploadPrintScreen.gg", {
          cardId: this.cardId,
          pageId: this.pageId,
          base64ImgUrl: img
        })
        .then(response => {
          console.log("success:", response.url);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../common.scss";

.upload {
  width: 112 * $px;
  height: 112 * $px;
  background: url("../assets/invite_ic_pic.png") no-repeat;
  background-size: 100%;
  input {
    display: none;
  }
  .file {
    width: 100%;
    height: 100%;
    display: inline-block;
    font-size: 0;
    position: absolute;
    left: 0;
    z-index: 1000;
    appearance: none;
    outline: none;
    border: none;
    background: none;
  }
}
</style>
