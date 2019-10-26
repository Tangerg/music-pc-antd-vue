import Vue from 'vue'
import Vuex from 'vuex'
import listInfo from './modules/list-info'
import playList from './modules/play-list'
import player from './modules/player'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    listInfo,
    playList,
    player
  }
})
