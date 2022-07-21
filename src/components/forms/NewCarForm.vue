<template>
  <form @submit.prevent="handleSubmit()">
    <div class="field-group">
      <label for="name">Name:</label>
      <input type="text" v-model="name" placeholder="Name..." />
    </div>
    <div class="field-group">
      <label for="name">Manufacturer:</label>
      <select v-model="manufacturerId">
        <option
          v-for="manufacturer in allManufacturers"
          :key="manufacturer.id"
          :value="manufacturer.id"
        >
          {{ manufacturer.name }}
        </option>
      </select>
    </div>
    <div class="field-group">
      <label for="name">Fuel Type:</label>
      <select v-model="fuelTypeId">
        <option
          v-for="fuelType in allFuelTypes"
          :key="fuelType.id"
          :value="fuelType.id"
        >
          {{ fuelType.name }}
        </option>
      </select>
    </div>
    <div class="field-group">
      <label for="name">Top Speed:</label>
      <input
        type="number"
        v-model="topSpeed"
        step="0.01"
        placeholder="Top speed (mph)..."
      />
    </div>
    <div class="field-group">
      <label for="name">Doors:</label>
      <input type="number" v-model="doors" placeholder="Doors..." />
    </div>
    <div class="field-group">
      <label for="name">Seats:</label>
      <input type="number" v-model="seats" placeholder="Seats..." />
    </div>
    <div class="field-group">
      <label for="name">Password:</label>
      <input type="text" v-model="password" placeholder="Password..." />
    </div>
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
      manufacturerId: 1,
      fuelTypeId: 1,
      topSpeed: "",
      doors: "",
      seats: "",
      password: "",
    };
  },
  created() {
    this.fetchManufacturers();
    this.fetchFuelTypes();
  },
  methods: {
    ...mapActions(["newCar", "fetchManufacturers", "fetchFuelTypes"]),
    async handleSubmit() {
      const payload = {
        name: this.name,
        manufacturer_id: this.manufacturerId,
        fuel_type_id: this.fuelTypeId,
        top_speed: this.topSpeed,
        doors: this.doors,
        seats: this.seats,
        password: this.password,
      };
      await this.newCar(payload);
      if (!this.carsError) {
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapGetters([
      "allFuelTypes",
      "allManufacturers",
      "carsLoading",
      "carsError",
    ]),
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

select {
  padding: 3px;
  font-size: 18px;

  border-radius: 5px;
}

input,
select {
  width: 240px;
  border: 2px solid #000;
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
