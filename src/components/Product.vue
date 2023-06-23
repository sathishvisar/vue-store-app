<template>
    <div v-if="product" class="product">
        <img :src="product.image" class="product-image"/>
        <ul>
            <li>{{ product.title }}</li>
            <li>{{ product.price }}</li>
            <li>{{ product.category }}</li>
            <li>{{ product.rating.rate }}</li>
            <li>{{ product.rating.count }}</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'store-product',
  props:{
    product: Object
  }
}
</script>

<style lang="stylus" scoped>

    .product {
        .product-image {
            width: 90%;
            height: auto;
            margin: 0px auto;
        }

    }
</style>>