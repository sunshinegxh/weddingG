<template>
  <div class="upload">
    <input enctype="multipart/form-data" class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="uploadShotScreen($event)"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "b40389e69909665b2a320da48747d528"
      // ip: '47.105.43.207',
      // port: '81'
    };
  },
  methods: {
    uploadShotScreen(e) {
      let file = e.target.files[0];
      let param = new FormData();
      param.append("file", file);
      this.$http
        .post(
          "http://47.105.43.207:80/()/banhunli/card/replacePageImg.gg?cardId=16&pageId=10&imageSort=1",
          param,
          {
            headers: { "Content-Type": "multipart/form-data" }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          document.write(e);
        });
    }
  }
};
</script>

<style>
input {
  position: absolute;
  left: 0;
  z-index: 1000;
}
</style>
