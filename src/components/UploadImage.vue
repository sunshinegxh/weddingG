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
import html2canvas from "html2canvas";
import { mapState } from "vuex";
import utils from "../libs/utils";

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

      // let size = file.size;
      // var maxSize = 5 * 1024;
      // if (size >= maxSize) {
      //   alert("图片大小不能超过5M！");
      //   return false;
      // }

      let param = new FormData();
      param.append("file", file);

      this.$http
        .post(
          `${utils.api()}/()/banhunli/card/replacePageImg.gg?cardId=${
            this.cardId
          }&pageId=${this.pageId}&imageSort=${this.imageSort}`,
          param,
          {
            headers: { "Content-Type": "multipart/form-data" }
          }
        )
        .then(response => {
          if (response.body.code === "0000") {
            var self = this;
            var imgUrl = response.body.data.imgUrl;
            window.URL = window.URL || window.webkitURL;
            var xhr = new XMLHttpRequest();
            xhr.open("get", imgUrl, true);
            // 至关重要
            xhr.responseType = "blob";
            xhr.onload = function() {
              if (this.status == 200) {
                //得到一个blob对象
                var blob = this.response;
                console.log("blob", blob);
                //  至关重要
                let oFileReader = new FileReader();
                oFileReader.onloadend = function(e) {
                  let base64 = e.target.result;
                  self.$emit("change-url", {
                    url: base64,
                    index: self.imageSort
                  });
                  self.shotScreen();
                };
                oFileReader.readAsDataURL(blob);
              }
            };
            xhr.onerror = function(e) {
              console.log(e);
            };
            xhr.send();
          }
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
        .post(`${utils.api()}/()/banhunli/card/uploadPrintScreen.gg`, {
          cardId: this.cardId,
          pageId: this.pageId,
          base64ImgUrl: img
        })
        .then(response => {
          console.log("success:", response);
          const bridge = window.Android;
          function toEditPage() {
            window.Android.refreshThumb();
          }
          if (bridge) {
            toEditPage();
          } else {
            document.addEventListener("Android", () => {
              toEditPage();
            });
          }
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
