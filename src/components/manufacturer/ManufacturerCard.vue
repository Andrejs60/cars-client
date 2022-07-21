<template>
  <div class="manufacturer-card">
    <Card :heading="manufacturer.name" />
  </div>
</template>

<script>
import Card from "../card/Card.vue";

export default {
  name: "ManufacturerCard",
  props: ["manufacturer"],
  components: { Card },
};
</script>

<style scoped>
.manufacturer-card .card {
  text-align: center;
  cursor: default;
}

/* .manufacturer-card .card:hover {
} */
</style>
