import { createStore } from "vuex";
import cars from "./modules/cars";
import manufacturers from "./modules/manufacturers";
import fuelTypes from "./modules/fuelTypes";
import cart from "./modules/cart";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cars,
    manufacturers,
    fuelTypes,
    cart,
  },
});
