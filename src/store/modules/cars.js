import axios from "axios";

const cars = {
  state: () => ({
    loading: false,
    error: null,
    cars: [],
  }),
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setCars(state, cars) {
      state.cars = cars;
    },
  },
  actions: {
    async fetchCars({ commit }, params) {
      commit("setError", null);
      commit("setLoading", true);
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/cars/list",
          { params }
        );
        commit("setTodos", data);
      } catch (error) {
        console.error(error);
        commit("setError", "Failed fetching cars.");
      }
      commit("setLoading", false);
    },
  },
  getters: {
    allCars(state) {
      return state.cars;
    },
  },
};

export default cars;
