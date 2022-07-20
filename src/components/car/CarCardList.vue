<template>
  <div v-if="!carsLoading && !carsError" class="card-list">
    <CarCard v-for="car in allCars" :key="car.id" :car="car" />
  </div>
  <p v-else-if="carsError" class="error">{{ carsError }}</p>
  <p v-else-if="carsLoading" class="loading">Loading...</p>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CarCard from "@/components/car/CarCard.vue";

export default {
  name: "CarCardList",
  components: { CarCard },
  mounted() {
    // if (this.allCars.length === 0) {
    this.fetchCars();
    // }
  },
  methods: {
    ...mapActions(["fetchCars"]),
  },
  computed: {
    ...mapGetters(["allCars", "carsLoading", "carsError"]),
  },
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}

.loading {
  font-weight: bold;
}
</style>
