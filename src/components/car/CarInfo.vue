<template>
  <div class="car-info">
    <h1>{{ car.name }}</h1>
    <h2>{{ car.manufacturer.name }}</h2>
    <h3>{{ car.fuel_type.name }}</h3>
    <h3>
      Top Speed: {{ car.top_speed }}mph | Seats: {{ car.seats }} | Doors:
      {{ car.doors }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "CarInfo",
  props: ["car"],
};
</script>

<style scoped>
.car-info {
  background: lightsteelblue;
  padding: 12px;
  border-radius: 12px;
}
</style>
