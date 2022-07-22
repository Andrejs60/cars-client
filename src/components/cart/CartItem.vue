<template>
  <div class="cart-item" @click.prevent="gotoCar(car.id)">
    <h1>{{ car.name }}</h1>
    <h2>{{ car.manufacturer.name }}</h2>
    <h3>Quantity: {{ car.quantity }}</h3>
    <div class="button-container">
      <button @click.stop="removeCartItem(car)" class="cart-button">-</button>
      <button @click.stop="addCartItem(car)" class="cart-button">+</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartItem",
  props: ["car"],
  methods: {
    gotoCar(id) {
      this.$router.push(`/cars/${id}`);
    },
    ...mapActions(["addCartItem", "removeCartItem", "deleteCartItem"]),
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: row;
}

.cart-button {
  padding: 12px 20px;
  margin-right: 8px;
  border: none;
  border-radius: 6px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 14px;
  background: #00b4d8;
  color: #fff;
}

.cart-button:hover {
  cursor: pointer;
  background: #48cae4;
}

.cart-item {
  width: 100%;
  background: #caf0f8;
  /* border: 1px solid #000; */
  border-radius: 12px;
  padding: 16px 30px;
  text-align: left;
  margin-bottom: 12px;
  cursor: pointer;
}

.cart-item:hover {
  background: #ade8f4;
}
</style>
