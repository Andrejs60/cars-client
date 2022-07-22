import axios from "axios";

const cars = {
  state: () => ({
    items: {},
  }),
  mutations: {
    addItem(state, item) {
      // Add item to state
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, quantity: 1 };
      } else {
        // Increase quantity
        state.items[item.id].quantity += 1;
      }
    },
    removeItem(state, item) {
      const currentQuantity = state.items[item.id].quantity;
      if (currentQuantity === 1) {
        // Remove from cart
        delete state.items[item.id];
      } else {
        // Decrease quantity
        state.items[item.id].quantity -= 1;
      }
    },
    deleteItem(state, item) {
      delete state.items[item.id];
    },
    clearItems(state) {
      state.items = {};
    },
  },
  actions: {
    addCartItem({ commit }, item) {
      commit("addItem", item);
    },
    removeCartItem({ commit }, item) {
      commit("removeItem", item);
    },
    deleteCartItem({}, item) {
      commit("deleteItem", item);
    },
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    cartItem: (state) => (id) => {
      return state.items[id];
    },
    cartSize(state) {
      return Object.keys(state.items).length;
    },
  },
};

export default cars;
