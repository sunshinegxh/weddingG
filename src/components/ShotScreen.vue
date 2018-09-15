<template>
  <img src="../assets/invite_ic_edit.png" data-html2canvas-ignore="true" class="shotS" @click="shotScreen" />
  <!-- <img src="../assets/invite_ic_edit.png" data-html2canvas-ignore="true" class="shotS" @click="shotScreen" /> -->
</template>

<script>
import html2canvas from "html2canvas";

export default {
  methods: {
    shotScreen() {
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
        link.href = canvas.toDataURL("image/png");
        link.download = "myChart.png";
        link.click();
        // var image = new Image();
        // image.src = canvas.toDataURL("image/png");
        // document.body.appendChild(image);
        // return image;
      });
    }
  }
};
</script>

<style>
.shotS {
  width: 100px;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 1000;
}
</style>
