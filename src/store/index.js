import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// import router from "@/router";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    selectedPath: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
