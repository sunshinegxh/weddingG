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
        // var image = new Image();
        // image.src = canvas.toDataURL("image/png");
        // document.body.appendChild(image);
        // return image;
      });
    },
    b64toBlob(b64Data, contentType, sliceSize) {
      contentType = contentType || "";
      sliceSize = sliceSize || 512;
      var byteCharacters = atob(b64Data.substring(b64Data.indexOf(",") + 1));
      var byteArrays = [];
      for (
        var offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      var blob = new Blob(byteArrays, { type: contentType });
      console.log(blob);
      return blob;
    },
    uploadShotScreen(img) {
      let data = new FormData();
      // data.append("file", img);
      data.append("file", this.b64toBlob(img));
      console.log(img);
      // this.$http
      //   .post("http://47.105.43.207:80/()/banhunli/card/uploadPrintScreen.gg", {
      //     cardId: 16,
      //     pageId: 10,
      //     base64ImgUrl: img
      //   })
      //   .then(response => {
      //     console.log("success:", response.url);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
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
