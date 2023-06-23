import Vue from 'vue';
import Router from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from '@/store';
import App from '@/App.vue';

Vue.use(Router);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const routes = [
  { path: '/', name: 'products', component: () => import("@/components/Products"), },
  { path: '/cart', name: 'cart', component: () => import("@/components/Cart"), }
];

const router = new Router({
  routes
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");


// Event bus used by our app for sharing data between component
// export const EventBus = new Vue();