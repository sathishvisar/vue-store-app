<template>
     <div>
        <router-view></router-view>
    </div>
</template>

<script>
import { actions as ac } from '@/store/constants/products';
import store from "@/store";
export default {
  name: 'App',
  async mounted(){
    await store.dispatch(ac.FETCH_PRODUCTS);
  },
}
</script>

<style lang="stylus">
.loading {
    position: fixed;
    z-index: 4;
    top: 45%;
    left: 50%;
}
</style>