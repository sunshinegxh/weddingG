<template>
    <button data-html2canvas-ignore="true" style="height: 100px; position: fixed; top: 0;z-index: 1000" @click="shotScreen">这里是截屏按钮</button>
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
</style>
