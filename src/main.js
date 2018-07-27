import Vue from "vue";
import App from "./App.vue";
import Resource from "vue-resource";
import router from "./router";
import store from "./store";

const app = {
  launch() {
    this.initRem();
    Vue.use(Resource);
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  },
  initRem() {
    let doc = document,
      win = window,
      docEle = doc.documentElement,
      evt = "onorientationchange" in window ? "orientationchange" : "resize",
      fn = () => {
        var width = docEle.clientWidth;
        width && (docEle.style.fontSize = (width / 320) * 16 + "px");
      };

    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
  }
};

app.launch();
