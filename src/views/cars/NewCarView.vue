<template>
  <div class="new-car">
    <h1>New Car</h1>
    <NewCarForm />
  </div>
</template>

<script>
import NewCarForm from "@/components/forms/NewCarForm.vue";

export default {
  name: "NewCarView",
  components: {
    NewCarForm,
  },
};
</script>

<style></style>
