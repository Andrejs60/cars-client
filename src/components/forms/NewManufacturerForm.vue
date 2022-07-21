<template>
  <form @submit.prevent="handleSubmit()">
    <div class="field-group">
      <label for="name">Name:</label>
      <input type="text" v-model="name" placeholder="Name..." />
    </div>
    <div class="field-group">
      <label for="name">Password:</label>
      <input type="text" v-model="password" placeholder="Password..." />
    </div>
    <br />
    <button
      :disabled="manufacturersLoading"
      type="submit"
      class="submit-button"
    >
      {{ manufacturersLoading ? "Adding..." : "New" }}
    </button>
    <p v-if="manufacturersError" class="error">{{ manufacturersError }}</p>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NewManufacturerForm",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["newManufacturer"]),
    async handleSubmit() {
      const payload = { name: this.name, password: this.password };
      await this.newManufacturer(payload);
      if (!this.manufacturersError) {
        this.$router.push("/manufacturers");
      }
    },
  },
  computed: {
    ...mapGetters(["manufacturersLoading", "manufacturersError"]),
  },
};
</script>

<style scoped>
.field-group {
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;
}

.field-group:last-of-type {
  margin-bottom: 0;
}

label {
  font-size: 20px;
  font-weight: bold;
  margin-right: 6px;
}

input {
  padding: 3px;
  font-size: 18px;
  border-radius: 5px;
}

.submit-button {
  margin: 14px;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 14px;
  background: #00b4d8;
  color: #fff;
  width: 100px;
}

.submit-button:hover {
  cursor: pointer;
  background: #48cae4;
}

.error {
  font-weight: bold;
  color: red;
  margin: 0;
}

.loading {
  font-weight: bold;
}
</style>
