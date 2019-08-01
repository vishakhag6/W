import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Home from './components/HomeComponent.vue'
import Category from './components/CategoryComponent.vue';


import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.config.productionTip = false
Vue.use(VueRouter, VueAwesomeSwiper)

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'Category', path: '/category/:slug', component: Category },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({mode: 'history', hash: false, routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
