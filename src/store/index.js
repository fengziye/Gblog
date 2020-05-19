import Vue from 'vue'
import Vuex from 'vuex'
import {getTimeInterval} from '../utils/index'

Vue.use(Vuex)
const runAt = '1589878800000';
let timer = null;
const state = {
    loading: false,
    runTimeInterval: ''
}
const mutations = {
    SET_LOADING: (state, v) => {
        state.loading = v;
    },
    GET_RUNTIME_INTERVAL: (state) => {
        if (!timer || !state.runTimeInterval) {
          timer = setInterval(() => {
            state.runTimeInterval = getTimeInterval(runAt);
          }, 1000);
        }
    }
}
const actions = {
    setLoading: ({commit}, v) => {
        commit('SET_LOADING', v);
    },
    initComputeTime: ({commit}) => {
        commit('GET_RUNTIME_INTERVAL');
    }
}
const getters = {
    loading: state => state.loading,
    runTimeInterval: state => state.runTimeInterval
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {},
    getters
})
