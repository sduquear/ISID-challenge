import axios from "axios";
import { baseUrl } from "@/plugins/constants";
export default {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    users: (state) => state.users,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getUsers({ commit }) {
      return axios
        .get(baseUrl)
        .then((res) => {
          commit("SET_USERS", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
