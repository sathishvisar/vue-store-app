<template>
    <div>
      <Header />

      <ul class="cart-items" v-if="products && products.length">
        <li v-for="item in cartItems" :key="item.productId">
           {{cartItem(item.productId).title}} - {{item.quantity}}
        </li>
      </ul>

      <Footer />
      <Login />
    </div>
</template>

<script>
import store from "@/store";
import { actions as pac } from '@/store/constants/products';
import { actions as ac } from '@/store/constants/cart';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
export default {
  name: 'store-cart',
  async mounted(){
      await store.dispatch(pac.FETCH_PRODUCTS);
      await store.dispatch(ac.FETCH_CART);
  },
  computed: {
    isLoading(){
        return this.$store.state.cart.loading
    },
    error(){
        return this.$store.state.cart.error
    },
    cartItems(){
        return this.$store.state.cart.data || []
    },
    products(){
        return this.$store.state.products.data || []
    }
  },
  methods:{
    cartItem(id) {
      return this.products.find(obj => obj.id === id);
    }
  },  
  components: {
    Header,
    Footer,
    Login
  }
}
</script>


<style lang="stylus" scoped>
.cart-items {
    
    li {
      list-style : none;
      padding: 1.2rem 0.8rem;
      border-bottom: 1px solid rgba(0,0,0,0.08);
    }
}   
</style>