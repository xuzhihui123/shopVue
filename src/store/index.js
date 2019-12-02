import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import  mutations from './mutations'
import  actions from './actions'
import  getters from './getters'

export default new Vuex.Store({
  state: {
    tabBarShow:true,
    shopCarList:[]
  },
  //里面的方法最好做单一的事情
  mutations,
  actions,
  getters
})
