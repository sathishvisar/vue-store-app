import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import login from './modules/login';
import products from '@/store/modules/products';

export default new Vuex.Store({
  modules: {
    products
  }
});