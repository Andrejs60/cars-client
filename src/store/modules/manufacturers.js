import axios from "axios";

const manufacturers = {
  state: () => ({
    loading: false,
    error: null,
    manufacturers: [],
  }),
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setManufacturers(state, manufacturers) {
      state.manufacturers = manufacturers;
    },
    addManufacturer(state, manufacturer) {
      // check if already in state
      const manufacturerIndex = state.manufacturers.findIndex(
        (m) => manufacturer.id === m.id
      );
      if (manufacturerIndex !== -1) {
        state.manufacturers[manufacturerIndex] = manufacturer;
      } else {
        state.manufacturers.push(manufacturer);
      }
    },
  },
  actions: {
    async fetchManufacturers({ commit }) {
      commit("setError", null);
      commit("setLoading", true);
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/manufacturers/list"
        );
        commit("setManufacturers", data.data);
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message;
        commit("setError", errorMsg || "Failed fetching manufacturers.");
      }
      commit("setLoading", false);
    },
    async newManufacturer({ commit }, name) {
      commit("setError", null);
      commit("setLoading", true);
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/manufacturers/new",
          { name }
        );
        commit("addManufacturer", data.data);
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message;
        commit("setError", errorMsg || "Failed adding new manufacturer.");
      }
      commit("setLoading", false);
    },
  },
  getters: {
    manufacturersLoading(state) {
      return state.loading;
    },
    manufacturersError(state) {
      return state.error;
    },
    allManufacturers(state) {
      return state.manufacturers;
    },
  },
};

export default manufacturers;
