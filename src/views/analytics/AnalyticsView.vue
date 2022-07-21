<template>
  <div class="view">
    <h1>Analytics</h1>
    <CarsPerManufacturerChart />
    <CarsPerFuelTypeChart />
  </div>
</template>

<script>
import CarsPerManufacturerChart from "@/components/chart/analytics/CarsPerManufacturerChart.vue";
import CarsPerFuelTypeChart from "@/components/chart/analytics/CarsPerFuelTypeChart.vue";

export default {
  name: "AnalyticsView",
  components: { CarsPerManufacturerChart, CarsPerFuelTypeChart },
};
</script>

<style></style>
