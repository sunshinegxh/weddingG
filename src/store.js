import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 页面是否可编辑
    edit: false,
    // cardID
    cardId: 0,
    // 当前页面
    currentPage: 1
  },
  mutations: {
    SET_EDIT(state, data) {
      state.edit = data;
    },
    SET_CARDID(state, data) {
      state.cardId = data;
    },
    SET_CURPAGE(state, data) {
      state.currentPage = data;
    }
  },
  actions: {}
});
