import Vue from "vue";
import App from "./App.vue";
import Resource from "vue-resource";
import router from "./router";
import store from "./store";

import ajax from "./libs/ajax";
import jssdk from "./libs/jssdk";
Vue.use(ajax);
Vue.use(jssdk);

const app = {
  launch() {
    this.initRem();
    this.script();
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
  },
  script() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://vpn.sina.com/res/my_m2/js/app-interface.js";
    head.appendChild(script);
  }
};

app.launch();
