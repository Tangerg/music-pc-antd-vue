import { SET_PLAY_LIST, SET_SEQUENCE_LIST, SET_PLAY_MODE, SET_FULL_SCREEN, SET_PLAY_STATE } from '../mutation-types'
import config from '@/config/config'
export default {
  state: {
    sequenceList: [],
    playList: [],
    currentIndex: -1,
    currentSong: {}
  },
  mutations: {
    [SET_SEQUENCE_LIST] (state, list) {
      state.sequenceList = list
    },
    [SET_PLAY_LIST] (state, list) {
      state.playList = list
    }
  },
  getters: {
    sequenceList: state => state.sequenceList,
    currentSong: state => state.sequenceList[0]
  },
  actions: {
    sequencePlay ({ commit, state }, { list }) {
      commit(SET_SEQUENCE_LIST, list)
      commit(SET_PLAY_LIST, list)
      commit(SET_PLAY_MODE, config.PLAY_MODE.sequence)
      commit(SET_FULL_SCREEN, false)
      commit(SET_PLAY_STATE, true)
    }
  }
}
