<template>
  <NavBar />
  <Container><router-view /></Container>
</template>

<script>
import NavBar from "./components/navigation/NavBar.vue";
import Container from "./components/Container.vue";

export default {
  name: "App",
  components: { NavBar, Container },
};
</script>

<style></style>
