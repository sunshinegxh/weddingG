<template>
  <div >
    <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="upload($event)"/>
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
  computed: {
    upload_url() {
      return (
        "/()/banhunli/card/replacePageImg.gg?token={{" +
        this.token +
        "}}&cardId=1&pageId=1&imageSort=1"
      );
    }
  },
  methods: {
    upload(e) {
      this.cardId = 1;
      this.pageId = 1;
      this.imageSort = 1;

      let file = e.target.files[0];
      let param = new FormData();
      param.append("file", file, file.name);
      param.append("cardId", this.cardId);
      param.append("pageId", this.pageId);
      param.append("imageSort", this.imageSort);

      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      this.$http.post(this.upload_url, param, config).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>

<style>
input {
  height: 100px;
  position: relative;
  z-index: 1000;
}
</style>
