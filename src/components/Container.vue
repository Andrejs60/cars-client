<template>
  <div class="container"><slot></slot></div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
