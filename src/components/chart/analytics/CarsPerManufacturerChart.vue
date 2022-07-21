<template>
  <h2>Cars per manufacturer</h2>
  <Chart v-if="datasetData" :datasetData="datasetData" label="# of Cars" />
</template>

<script>
import axios from "axios";
import createChartData from "@/helpers/createChartData";
import Chart from "@/components/chart/Chart.vue";

export default {
  name: "CarsPerManufacturerChart",
  components: { Chart },
  data() {
    return {
      datasetData: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/analytics/cars-per-manufacturer"
      );
      this.datasetData = createChartData(data);
    },
  },
};
</script>

<style></style>
