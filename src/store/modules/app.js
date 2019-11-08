import { SET_COLLAPSED_STATE } from '../mutation-types'

export default {
  state: {
    collapsed: false
  },
  mutations: {
    [SET_COLLAPSED_STATE] (state, flag) {
      state.collapsed = flag
    }
  },
  getters: {
    collapsedState: state => state.collapsed
  },
  actions: {}
}
