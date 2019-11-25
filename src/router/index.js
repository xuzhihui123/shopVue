import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from 'views/home/Home.vue'
import Profile from 'views/profile/Profile.vue'
import ShopCar from 'views/shopcar/ShopCar.vue'
import ShopSort from 'views/shopsort/ShopSort.vue'
import Detail from 'views/detail/Detail'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  {
    path: '/shopsort',
    component: ShopSort
  }, {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router