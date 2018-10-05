import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Music from "./views/Music.vue";
import BaoMax from "./views/BaoMax.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: BaoMax
    },
    {
      path: "/baomax",
      name: "baomax",
      component: BaoMax
    },
    {
      path: "/music",
      name: "music",
      component: Music
    }
  ]
});
