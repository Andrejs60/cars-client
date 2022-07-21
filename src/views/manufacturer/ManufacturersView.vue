<template>
  <div class="manufacturers">
    <h1>Manufacturers</h1>
    <button @click.prevent="gotoNewManufacturer()" class="nav-button">
      New Manufacturer
    </button>
    <ManufacturerCardList />
  </div>
</template>

<script>
import ManufacturerCardList from "@/components/manufacturer/ManufacturerCardList.vue";

export default {
  name: "ManufacturersView",
  components: { ManufacturerCardList },
  methods: {
    gotoNewManufacturer() {
      this.$router.push("/manufacturers/new");
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
