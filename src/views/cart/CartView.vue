<template>
  <div class="view">
    <h1>Cart</h1>
    <CartItemList />
  </div>
</template>

<script>
import CartItemList from "@/components/cart/CartItemList.vue";

export default {
  name: "CartView",
  components: { CartItemList },
};
</script>

<style></style>
