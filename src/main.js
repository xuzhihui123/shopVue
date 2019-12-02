import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'


// import Toast from 'common/toast'
//
// //自定义插件组件安装  会执行install函数
// Vue.use(Toast)

Vue.use(VueLazyLoad,{
  loading:require('assets/placeholder.png')
})


Vue.prototype.$bus =  new Vue()
Vue.config.productionTip = false


//移动端 300ms延迟 解决
FastClick.attach(document.body);
import 'normalize.css'

import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

import { NavBar } from 'vant';

Vue.use(NavBar);
import { Toast } from 'vant';

Vue.use(Toast);

Vue.filter('dataFormat',(str,date='YYYY-MM-DD HH:mm:ss')=>{
  return moment(str).format(date)
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
