import Vue from 'vue'
import Vuex from 'vuex'
import playList from './modules/playlist'
import artist from './modules/artist'
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
    playList,
    artist,
    player
  }
})
