<template>
    <div>
      <Header />
      <Footer />
      <Login />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
export default {
  name: 'store-cart',
  components: {
    Header,
    Footer,
    Login
  }
}
</script>