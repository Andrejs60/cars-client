<template>
  <div class="new-manufacturer">
    <h1>new manufacturer view</h1>
    <NewManufacturerForm />
  </div>
</template>

<script>
import NewManufacturerForm from "@/components/forms/NewManufacturerForm.vue";

export default {
  name: "NewManufacturerView",
  components: {
    NewManufacturerForm,
  },
};
</script>

<style></style>
