<template>

   <div>
        <Header />
        <b-container fluid="sm" v-if="!isLoading">
            <b-row>
                <b-col col xs="12" sm="4" md="3" lg="2" v-for="product in products" :key="product.id">
                    <Product :product="product" />
                </b-col>
            </b-row>
        </b-container>
        <p v-if="isLoading">Loading...</p>
        <p v-if="error">{{ error }}</p>
        <Footer />
   </div>
</template>
<script>
import store from "@/store";
import { actions as ac } from '@/store/constants/products';
import Product from "@/components/Product.vue"
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: 'store-products',
    async mounted(){
        await store.dispatch(ac.FETCH_PRODUCTS);
    },
    computed: {
        isLoading(){
            return this.$store.state.products.loading
        },
        error(){
            return this.$store.state.products.error
        },
        products(){
            return this.$store.state.products.data || []
        }
    },
    components: {
        Product,
        Header,
        Footer
    }
}
</script>