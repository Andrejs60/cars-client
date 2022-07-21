<template>
  <div class="car-card">
    <Card
      :heading="car.name"
      :subHeading="car.manufacturer.name"
      :contentText="contentText"
      @goto="gotoCar(car.id)"
    />
  </div>
</template>

<script>
import Card from "../card/Card.vue";

export default {
  name: "CarCard",
  props: ["car"],
  components: { Card },
  data() {
    return {
      contentText: "",
    };
  },
  created() {
    this.contentText = `Top Speed: ${this.car.top_speed}mph | Seats: ${this.car.seats} | Doors:
      ${this.car.doors}`;
  },
  methods: {
    gotoCar(id) {
      this.$router.push(`/cars/${id}`);
    },
  },
};
</script>

<style scoped>
/* .car-card .card {
}

.car-card .card:hover {
} */
</style>
