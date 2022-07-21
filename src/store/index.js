import { createStore } from "vuex";
import cars from "./modules/cars";
import manufacturers from "./modules/manufacturers";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cars,
    manufacturers,
  },
});
