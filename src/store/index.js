import { createStore } from "vuex";
import cars from "./modules/cars";
import manufacturers from "./modules/manufacturers";
import fuelTypes from "./modules/fuelTypes";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cars,
    manufacturers,
    fuelTypes,
  },
});
