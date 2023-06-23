import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "hash",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { 
            path: '/', 
            name: 'products',
            component: () => import("@/components/Products") 
        },
        { 
            path: '/cart', 
            name: 'cart', 
            component: () => import("@/components/Cart")
        },
        { 
            path: "*", 
            redirect: "/" 
        }
    ]
});