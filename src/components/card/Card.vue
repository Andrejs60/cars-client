<template>
  <div class="card" @click.prevent="$emit('goto')">
    <h1>{{ heading }}</h1>
    <h2>{{ subHeading }}</h2>
    <h3>{{ contentText }}</h3>
    <button
      v-if="buttonText"
      @click.stop="$emit('buttonPress')"
      class="card-button"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["heading", "subHeading", "contentText", "buttonText"],
};
</script>

<style scoped>
.card-button {
  display: block;
  margin-left: auto;
  margin-right: 0;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 14px;
  background: #00b4d8;
  color: #fff;
}

.card-button:hover {
  cursor: pointer;
  background: #48cae4;
}

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
