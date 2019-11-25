import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabBarShow:true
  },
  mutations: {
    changeTabBarShow(state,flag){
        state.tabBarShow = flag
    }
  },
  actions: {
  },
  modules: {
  }
})
