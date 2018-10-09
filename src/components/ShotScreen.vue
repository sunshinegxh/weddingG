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
        self.uploadShotScreen(shotScreen);
      });
    },
    uploadShotScreen(img) {
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/card/uploadPrintScreen.gg", {
          cardId: 78,
          pageId: 1,
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
