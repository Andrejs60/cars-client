<template>
  <div v-if="!manufacturersLoading && !manufacturersError" class="card-list">
    <ManufacturerCard
      v-for="manufacturer in allManufacturers"
      :key="manufacturer.id"
      :manufacturer="manufacturer"
    />
  </div>
  <p v-else-if="manufacturersError" class="error">{{ manufacturersError }}</p>
  <p v-else-if="manufacturersLoading" class="loading">Loading...</p>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ManufacturerCard from "@/components/manufacturer/ManufacturerCard.vue";

export default {
  name: "ManufacturerCardList",
  components: { ManufacturerCard },
  mounted() {
    // if (this.allManufacturers.length === 0) {
    this.fetchManufacturers();
    // }
  },
  methods: {
    ...mapActions(["fetchManufacturers"]),
  },
  computed: {
    ...mapGetters([
      "allManufacturers",
      "manufacturersLoading",
      "manufacturersError",
    ]),
  },
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}

.loading {
  font-weight: bold;
}
</style>
