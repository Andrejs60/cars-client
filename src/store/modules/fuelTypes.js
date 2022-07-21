import axios from "axios";

const fuelTypes = {
  state: () => ({
    loading: false,
    error: null,
    fuelTypes: [],
  }),
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setFuelTypes(state, fuelTypes) {
      state.fuelTypes = fuelTypes;
    },
  },
  actions: {
    async fetchFuelTypes({ commit }) {
      commit("setError", null);
      commit("setLoading", true);
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/fuel-types/list"
        );
        commit("setFuelTypes", data.data);
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message;
        commit("setError", errorMsg || "Failed fetching fuel types.");
      }
      commit("setLoading", false);
    },
  },
  getters: {
    fuelTypesLoading(state) {
      return state.loading;
    },
    fuelTypesError(state) {
      return state.error;
    },
    allFuelTypes(state) {
      return state.fuelTypes;
    },
  },
};

export default fuelTypes;
