<template>
  <div class="car-info-panel">
    <h1>Car Information</h1>
    <CarInfo v-if="singleCar(id)" :car="singleCar(id)" />
    <p v-else-if="carsError" class="error">{{ carsError }}</p>
    <p v-else-if="carsLoading" class="loading">Loading...</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CarInfo from "./CarInfo.vue";

export default {
  name: "CarInfoPanel",
  props: ["id"],
  components: { CarInfo },
  created() {
    if (!this.singleCar(this.id)) {
      this.fetchCar(this.id);
    }
  },
  methods: {
    ...mapActions(["fetchCar"]),
  },
  computed: {
    ...mapGetters(["singleCar", "carsLoading", "carsError"]),
  },
};
</script>

<style scoped>
.car-info-panel {
  background: lightblue;
  margin-top: 30px;
  padding: 12px;
  border-radius: 12px;
}
.error {
  font-weight: bold;
  color: red;
}

.loading {
  font-weight: bold;
}
</style>
