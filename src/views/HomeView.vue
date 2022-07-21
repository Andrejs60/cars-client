<template>
  <div class="view">
    <h1>Home</h1>
    <button @click.prevent="gotoNewCar()" class="nav-button">New Car</button>
    <CarCardList />
  </div>
</template>

<script>
// @ is an alias to /src
import CarCardList from "@/components/car/CarCardList.vue";

export default {
  name: "HomeView",
  components: { CarCardList },
  methods: {
    gotoNewCar() {
      this.$router.push("/cars/new");
    },
  },
};
</script>

<style scoped>
.nav-button {
  padding: 12px;
  border: none;
  border-radius: 6px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 14px;
  background: #00b4d8;
  color: #fff;
}

.nav-button:hover {
  cursor: pointer;
  background: #48cae4;
}
</style>
