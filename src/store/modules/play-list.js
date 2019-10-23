import { SET_SEQUENCE_LIST } from '../mutation-types'
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
    }
  },
  getters: {
    sequenceList: state => state.sequenceList,
    currentSong: state => state.sequenceList[0]
  },
  actions: {
    sequencePlay ({ commit, state }, { list }) {
      commit(SET_SEQUENCE_LIST, list)
    }
  }
}
