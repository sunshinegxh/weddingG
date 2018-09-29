import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 页面是否可编辑
    edit: false,
    // 能量值来源
    cardId: 0
  },
  mutations: {
    SET_EDIT(state, data) {
      state.edit = data;
    },
    SET_CARDID(state, data) {
      state.cardId = data;
    }
  },
  actions: {}
});
