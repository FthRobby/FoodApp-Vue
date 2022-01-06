import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.min'
import './assets/css/main.css'


Vue.use(VueToast)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init({
      duration: 900,
      delay: 100,
    });
  },
  router,
  render: h => h(App)
}).$mount('#app')
