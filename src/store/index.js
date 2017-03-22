import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  todos: [
    { id: 1, text: 'todo true', done: true },
    { id: 2, text: 'todo false', done: false }
  ]
}

export default new Vuex.Store({
  state,
  getters, // getter的作用：从state派生一些状态，比如筛选条件
  actions,
  mutations
})
