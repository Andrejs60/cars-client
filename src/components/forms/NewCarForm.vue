<template>
  <form @submit.prevent="handleSubmit()">
    <label for="name">Name:</label>
    <input type="text" v-model="name" placeholder="Name..." />
    <br />
    <button :disabled="carsLoading" type="submit" class="submit-button">
      {{ carsLoading ? "Adding..." : "New" }}
    </button>
    <p v-if="carsError" class="error">{{ carsError }}</p>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NewCarForm",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(["newCar"]),
    async handleSubmit() {
      await this.newCar(this.name);
      if (!this.carsError) {
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapGetters(["carsLoading", "carsError"]),
  },
};
</script>

<style scoped>
label {
  font-size: 20px;
  font-weight: bold;
  margin-right: 6px;
}

input {
  padding: 3px;
  font-size: 20px;
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
