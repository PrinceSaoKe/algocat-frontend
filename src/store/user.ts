import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: {
    loginUser: {
      userName: "未登录",
    },
  },
  actions: {
    getLoginUser({ commit }, payload) {
      //TODO 发请求获取登录信息
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
  //TODO 类型警告
  // eslint-disable-next-line
} as StoreOptions<any>;
