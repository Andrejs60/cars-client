import axios from "axios";

const cars = {
  state: () => ({
    loading: false,
    error: null,
    items: {},
  }),
  mutations: {
    setCart(state, cart) {
      state.items = cart;
    },
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
    async fetchCart({ commit }) {
      commit("setError", null);
      commit("setLoading", true);
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/cart");
        console.log("fetchcart", data);
        commit("setCart", data || {});
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message;
        commit("setError", errorMsg || "Failed fetching cart.");
      }
      commit("setLoading", false);
    },
    async addCartItem({ commit, state }, item) {
      commit("addItem", item);
      commit("setError", null);
      commit("setLoading", true);
      try {
        const { data } = await axios.post("http://127.0.0.1:8000/api/cart", {
          cart: state.items,
        });
        console.log(data);
        commit("setCart", data);
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message;
        commit("setError", errorMsg || "Failed fetching cart.");
      }
      commit("setLoading", false);
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
