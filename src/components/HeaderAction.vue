<template>
    <div>
        <b-button class="btn btnLogin" variant="outline-primary" v-if="!isLoggedin" @click="ShowLogin">Login</b-button>
        <template v-else>
          <b-button v-if="this.$route.name === 'products'" class="btn btnCart" variant="outline-primary" @click="goToCart">Cart</b-button>
          <b-button v-if="this.$route.name === 'cart'" class="btn btnCart" variant="outline-primary" @click="goToProducts">Products</b-button>
          <b-button class="btn btnLogout" variant="link" v-if="position === 'header'" @click="logOut"><BoxArrowRightIcon /></b-button>
        </template>
    </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from 'vuex';
import { actions as ac } from '@/store/constants/login';
import BoxArrowRightIcon from "@/components/icons/BoxArrowRightIcon"

export default {
  name: 'store-login',
    props: {
      position: {
        type: String,
        default: "header",
        validator: function (value) {
          return ['header', 'product'].includes(value);
        }
      }
  },
  computed:{
    ...mapGetters(['isLoggedin']),
  },
  methods:{
    ShowLogin() {
      this.$bvModal.show('login-modal')
    },
    goToCart() {
      this.$router.push({
				name: "cart",
			});
    },
    goToProducts() {
      this.$router.push({
				name: "products",
			});
    },
    async logOut() {
      await store.dispatch(ac.USER_LOGOUT)
      this.goToProducts()
    }
  },
  components: {
    BoxArrowRightIcon
  }
}
</script>
<style lang="stylus" scoped>
  .btn {
    margin-right: 30px;
  }
</style>