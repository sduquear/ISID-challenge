import Vuex from "vuex";
import UserModule from "@/store/modules/user";
const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      user: UserModule,
    },
  });
};

export default createStore;
