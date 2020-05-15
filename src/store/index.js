import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false
}
const mutations = {
  SET_LOADING: (state,v)=>{
    state.loading = v;
  }
}
const actions = {
  setLoading: ({commit},v)=>{
    commit('SET_LOADING', v);
  }
}
const getters = {
  loading: () => state.loading
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  },
  getters
})
