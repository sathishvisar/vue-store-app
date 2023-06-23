<template>

   <div class="products-container">
        <Header />
        <b-container fluid="sm" v-if="!isLoading">
            <b-row>
                <b-col col xs="12" sm="4" md="4" lg="3" v-for="product in products" :key="product.id">
                    <Product :product="product" />
                </b-col>
            </b-row>
        </b-container>
        <p v-if="isLoading" class="loading">
            <b-spinner variant="primary"></b-spinner>
        </p>
        
        <p v-if="error">{{ error }}</p>
        <Footer />
        <Login />
   </div>
</template>
<script>
import Product from "@/components/Product.vue"
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";

export default {
    name: 'store-products',
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
        Footer,
        Login
    }
}
</script>
<style lang="stylus" scoped>
.products-container {
    background: #fafafa
}   
</style>