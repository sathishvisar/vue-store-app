<template>
  <b-button class="btn btnCart" variant="outline-primary" @click="addToCart"
    >Add to Cart</b-button
  >
</template>

<script>
export default {
  name: "store-add-to-cart",
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      console.log(this.product);
    },
  },
};
</script>