<template>
  <NavBar />
  <div class="container"><router-view /></div>
</template>

<script>
import NavBar from "./components/navigation/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
}

.container {
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
