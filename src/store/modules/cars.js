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
    addCar(state, car) {
      // check if already in state
      const carIndex = state.cars.findIndex((c) => car.id === c.id);
      if (carIndex !== -1) {
        state.cars[carIndex] = car;
      } else {
        state.cars.push(car);
      }
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
        commit("setCars", data.data);
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message;
        commit("setError", errorMsg || "Failed fetching cars.");
      }
      commit("setLoading", false);
    },
    async fetchCar({ commit }, id) {
      commit("setError", null);
      commit("setLoading", true);
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/cars/get/${id}`
        );
        commit("addCar", data.data);
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message;
        commit("setError", errorMsg || "Failed fetching car.");
      }
      commit("setLoading", false);
    },
    async newCar({ commit }, payload) {
      commit("setError", null);
      commit("setLoading", true);
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/cars/new",
          payload
        );
        commit("addCar", data.data);
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message;
        commit("setError", errorMsg || "Failed adding new car.");
      }
      commit("setLoading", false);
    },
  },
  getters: {
    carsLoading(state) {
      return state.loading;
    },
    carsError(state) {
      return state.error;
    },
    allCars(state) {
      return state.cars;
    },
    singleCar: (state) => (id) => {
      const carId = parseInt(id);
      return state.cars.find((car) => car.id === carId);
    },
  },
};

export default cars;
