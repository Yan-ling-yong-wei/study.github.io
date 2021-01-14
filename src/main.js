import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./assets/js/rem"
import "./assets/css/reset.css"; 
import "./assets/css/common.css"

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import axios from "axios";
Vue.prototype.$axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
