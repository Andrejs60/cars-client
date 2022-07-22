<template>
  <div v-if="cartSize" class="cart-item-list">
    <CartItem
      v-for="cartItem in Object.values(cartItems)"
      :key="cartItem.id"
      :car="cartItem"
    />
  </div>
  <p v-else class="empty-text">Cart is empty.</p>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "@/components/cart/CartItem.vue";

export default {
  name: "CartItemList",
  components: { CartItem },
  computed: {
    ...mapGetters(["cartSize", "cartItems"]),
  },
};
</script>

<style scoped></style>
