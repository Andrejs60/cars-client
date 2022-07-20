<template>
  <div class="card" @click.prevent="gotoCar(car.id)">
    <h1>{{ car.name }}</h1>
    <h2>{{ car.manufacturer.name }}</h2>
    <h3>
      Top Speed: {{ car.top_speed }}mph | Seats: {{ car.seats }} | Doors:
      {{ car.doors }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: ["car"],
  methods: {
    gotoCar(id) {
      this.$router.push(`/cars/${id}`);
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  background: #caf0f8;
  /* border: 1px solid #000; */
  border-radius: 12px;
  padding: 16px 30px;
  text-align: left;
  margin-bottom: 12px;
  cursor: pointer;
}

.card:hover {
  background: #ade8f4;
}
</style>
