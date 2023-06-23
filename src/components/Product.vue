<template>
    <div v-if="product" class="product">
        <div class="product-image">
            <img :src="product.image" class="image"/>
        </div>
        <a class="title">{{ product.title }}</a>
        <div class="details">
            <ul>
                <li><span class="label">Price:</span>{{ product.price }}</li>
                <li><span class="label">Category:</span><span class="category">{{ product.category }}</span></li>
                <li><span class="label">Rating:</span>{{ product.rating.rate }} | {{ product.rating.count }}</li>
            </ul>
        </div>
        <div class="action">
            <AddToCart :product="product" />
        </div>
    </div>
</template>
<script>
import AddToCart from "@/components/AddToCart.vue";

export default {
  name: 'store-product',
  props:{
    product: Object
  },
  components:{
    AddToCart
  }
}
</script>

<style lang="stylus" scoped>

    .product {
        background: #ffffff;
        padding: 10px;
        margin-bottom: 30px;
        border-radius: 6px;

        .title {
            padding-bottom: 5px;
            overflow: hidden;
            display: block;
            cursor: pointer;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .product-image {
            width: 100%;
            height: 200px;
            text-align: center;
            
            .image {
                height: 80%;
                width: auto;
                max-width: 150px;
            }
        }

        .details {
            ul {
                padding: 0px;
                li {
                    list-style: none;
                    font-size: 14px;
                    .label {
                        margin-right: 5px;
                    }
                }
            }
        }

        .action {
            text-align: center;
        }

    }
</style>>