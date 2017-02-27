import Vue from 'vue'
import App from './App.vue'
import KeenUI from 'keen-ui';
import VueRouter from 'vue-router';
import store from './store'

import List from './pages/list.vue'
import Add from './pages/add.vue'
const routes = [
  { path: '/list', component: List },
  {path:'/add', component: Add}
]

Vue.use(VueRouter);
Vue.use(KeenUI);


const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  mode:"history",
})
new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app');
