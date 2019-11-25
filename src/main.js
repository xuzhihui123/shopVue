import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
Vue.prototype.$bus =  new Vue()
Vue.config.productionTip = false

import 'normalize.css'

import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

import { NavBar } from 'vant';

Vue.use(NavBar);

Vue.filter('dataFormat',(str,date='YYYY:MM:DD HH:mm:ss')=>{
  return moment(str).format(date)
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
