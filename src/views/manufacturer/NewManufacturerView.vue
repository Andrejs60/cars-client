<template>
  <div class="new-manufacturer">
    <h1>New Manufacturer</h1>
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
