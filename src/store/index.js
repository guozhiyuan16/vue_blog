import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowLoading:false
  },
  mutations: {
    show_loading(state){
      state.isShowLoading = true
    },
    hide_loading(state){
      state.isShowLoading = false
    }
  },
  actions: {
  },
  modules: {
  }
})
