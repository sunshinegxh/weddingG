<template>
  <img src="../assets/invite_ic_edit.png" data-html2canvas-ignore="true" class="shotS" @click="shotScreen" />
  <!-- <img src="../assets/invite_ic_edit.png" data-html2canvas-ignore="true" class="shotS" @click="shotScreen" /> -->
</template>

<script>
import html2canvas from "html2canvas";

export default {
  methods: {
    shotScreen() {
      let self = this;
      html2canvas(document.body, {
        proxy: true,
        useCORS: true,
        foreignObjectRendering: true,
        backgroundColor: "#fff",
        scale: 1,
        width: window.innerWidth,
        height: window.innerHeight
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
      let data = new FormData();
      data.append("file", this.dataURLtoFile(img, "shot"));
      this.$http
        .post(
          "http://47.105.43.207:80/()/banhunli/card/uploadPrintScreen.gg?cardId=16&pageId=10",
          data,
          {
            "Content-Type": "multipart/form-data"
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          document.write(e);
        });
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.shotS {
  width: 112 * $px;
  height: 112 * $px;
  position: fixed;
  top: 0;
  z-index: 1000;
}
</style>
