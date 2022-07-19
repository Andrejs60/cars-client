<template>
  <div class="home">
    <h1>Home</h1>
    <CardList />
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from "@/components/card/CardList.vue";

export default {
  name: "HomeView",
  components: { CardList },
};
</script>

<style scoped>
.home {
  width: 90%;
}
</style>
