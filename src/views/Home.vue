<template>
  <div class="app">
    <div class="loadEffect" v-if="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <full-page v-else :indexData="indexData"></full-page>
  </div>
</template>

<script>
import fullPage from "./fullpage.vue";

export default {
  name: "app",
  data() {
    return {
      loading: true,
      indexData: []
    };
  },
  methods: {},
  components: {
    fullPage
  },
  created() {
    this.$http
      .get("http://localhost:3000/getIndex")
      .then(response => {
        this.loading = false;
        let res = response.data;
        if (res.respCode === 0) {
          // 本地注释掉
          this.indexData = res.respData;
        } else {
          alert(res.respMsg);
        }
      })
      .catch(e => {
        document.write(e);
      });
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.app {
  height: 100%;
  width: 100%;
  background: #3243c7;
}

/* 下面的是与fullPage无关的样式 */

.animate {
  transition: all 1s ease-out 0s;
}

.move-left {
  transform: translateY(-1000%);
}

.move-right {
  transform: translateY(1000%);
}

@media screen and (max-width: 768px) {
  html,
  body {
    font-size: 12px;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

dt {
  font-weight: bold;
  font-size: 16px;
}

ul {
  padding-left: 1em;
}
</style>
