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
    currentPage: 0,
    // 是否客户端调用设置页面方法
    isSkip: false,
    // 底部宾客信息填写内容
    btmFormDta: {},
    // 宾客信息页面是否填写完信息，填写完成底部浮层不显示
    done: false
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
    },
    SET_ISSKIP(state, data) {
      state.isSkip = data;
    },
    SET_BTMDTA(state, data) {
      state.btmFormDta = data;
    },
    SET_INFODONE(state, data) {
      state.done = data;
    }
  },
  actions: {}
});
