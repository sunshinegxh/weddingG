<template>
  <div class="upload">
    <input enctype="multipart/form-data" class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="uploadShotScreen($event)"/>
  </div>
</template>

<script>
import toast from "./common/toast";

export default {
  props: ["cardId", "pageId", "imageSort"],
  data() {
    return {};
  },
  methods: {
    uploadShotScreen(e) {
      let file = e.target.files[0];
      let param = new FormData();
      param.append("file", file);

      toast("上传成功！");
      let url =
        "https://img2.mukewang.com/szimg/5bab70af00014fe105400300-360-202.jpg";
      this.$emit("change-url", { url: url, index: this.imageSort });
      // this.$http
      //   .post(
      //     `http://47.105.43.207:80/()/banhunli/card/replacePageImg.gg?cardId=${this.cardId}&pageId=${this.pageId}&imageSort=${this.imageSort}`,
      //     param,
      //     {
      //       headers: { "Content-Type": "multipart/form-data" }
      //     }
      //   )
      //   .then(response => {
      //     toast("上传成功！");
      //     let url =
      //       "https://img2.mukewang.com/szimg/5bab70af00014fe105400300-360-202.jpg";
      //     this.$emit("change-url", { url: url, index: this.imageSort });
      //     console.log("uploadShotScreen:", response);
      //   })
      //   .catch(e => {
      //     document.write(e);
      //   });
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
    width: 100%;
    height: 100%;
    display: inline-block;
    font-size: 0;
    position: absolute;
    left: 0;
    z-index: 1000;
    // display: none;
  }
}
</style>
