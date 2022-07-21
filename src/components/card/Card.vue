<template>
  <div class="card" @click.prevent="$emit('goto')">
    <h1>{{ heading }}</h1>
    <h2>{{ subHeading }}</h2>
    <h3>{{ contentText }}</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["heading", "subHeading", "contentText"],
};
</script>

<style scoped>
.card {
  width: 100%;
  background: #caf0f8;
  /* border: 1px solid #000; */
  border-radius: 12px;
  padding: 16px 30px;
  text-align: left;
  margin-bottom: 12px;
  cursor: pointer;
}

.card:hover {
  background: #ade8f4;
}
</style>
