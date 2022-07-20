<template>
  <div class="view">
    <h1>Home</h1>
    <CarCardList />
  </div>
</template>

<script>
// @ is an alias to /src
import CarCardList from "@/components/car/CarCardList.vue";

export default {
  name: "HomeView",
  components: { CarCardList },
};
</script>

<style></style>
