/**
 * 播发器相关相关store
 */
import { SET_FULL_SCREEN } from '../mutation-types'
import config from '@/config/config'
export default {
  state: {
    isPlaying: true,
    fullScreen: false,
    playMode: config.PLAY_MODE.sequence,
    drawer: false
  },
  mutations: {
    [SET_FULL_SCREEN] (state, flag) {
      state.fullScreen = flag
    }
  },
  getters: {
    isPlaying: state => state.isPlaying,
    drawer: state => state.drawer,
    fullScreen: state => state.fullScreen,
    playMode: state => state.playMode
  },
  actions: {
    setfullScreen ({ commit, state }, flag) {
      commit(SET_SEQUENCE_LIST, flag)
    }
  }
}
