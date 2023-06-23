import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue';
import Products from './components/Products.vue';
import Cart from './components/Cart.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Products },
  { path: '/cart', component: Cart }
];

const router = new VueRouter({
  routes
});

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')