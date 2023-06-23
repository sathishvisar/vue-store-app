import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import login from '@/store/modules/login';
import products from '@/store/modules/products';
import cart from '@/store/modules/cart';

export default new Vuex.Store({
  modules: {
    login,
    products,
    cart
  }
});