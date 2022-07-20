<template>
  <div class="view">
    <CarInfoPanel :id="id" />
  </div>
</template>

<script>
import CarInfoPanel from "@/components/car/CarInfoPanel.vue";

export default {
  name: "CarView",
  props: ["id"],
  components: { CarInfoPanel },
};
</script>

<style></style>
