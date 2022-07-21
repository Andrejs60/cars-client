<template>
  <div class="chart-container">
    <canvas ref="canvasRef" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

export default {
  name: "Chart",
  props: ["datasetData", "label"],
  data() {
    return {
      chart: null,
    };
  },
  created() {
    Chart.register(...registerables);
  },
  mounted() {
    const context = this.$refs.canvasRef.getContext("2d");
    const config = {
      type: "bar",
      data: {
        datasets: [
          {
            label: this.label,
            data: this.datasetData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
    this.chart = new Chart(context, config);
  },
};
</script>

<style scoped>
canvas {
  /* border: 1px solid #000; */
  align-content: center;
}

.chart-container {
  /* position: relative; */
  width: 60vw;
  margin: 0 auto;
}
</style>
