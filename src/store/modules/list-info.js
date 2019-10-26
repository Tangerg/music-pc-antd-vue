import { SET_LIST_INFO } from '../mutation-types'
export default {
  state: {
    listInfo: {}
  },
  mutations: {
    [SET_LIST_INFO] (state, info) {
      state.listInfo = info
    }
  },
  getters: {
    listInfo: state => state.listInfo
  },
  actions: {}
}
