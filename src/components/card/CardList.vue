<template>
  <div class="card-list"><Card v-for="car in allCars" :key="car.id" /></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "@/components/card/Card.vue";

export default {
  name: "CardList",
  components: { Card },
  created() {
    this.fetchCars();
  },
  methods: {
    ...mapActions(["fetchCars"]),
  },
  computed: {
    ...mapGetters(["allCars"]),
  },
};
</script>

<style></style>
