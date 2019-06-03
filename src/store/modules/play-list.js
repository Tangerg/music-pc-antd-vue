import { SET_SEQUENCE_LIST } from '../mutation-types'
export default {
  state: {
    sequenceList: [],
    playList: []
  },
  mutations: {
    [SET_SEQUENCE_LIST] (state, list) {
      state.sequenceList = list
    }
  },
  getters: {},
  actions: {
    sequencePlay ({ commit, state }, { list }) {
      commit(SET_SEQUENCE_LIST, list)
    }
  }
}
