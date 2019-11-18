import { SET_COLLAPSED_STATE, SET_FULL_SCREEN, SET_APP_THEME, SET_APP_SEARCH } from '../mutation-types'

export default {
  state: {
    fullScreen: false, // 播放器状态： true：全屏
    collapsed: false,
    theme: 'light',
    search: ''
  },
  mutations: {
    [SET_FULL_SCREEN] (state, flag) {
      state.fullScreen = flag
    },
    [SET_COLLAPSED_STATE] (state, flag) {
      state.collapsed = flag
    },
    [SET_APP_THEME] (state, theme) {
      state.theme = theme
    },
    [SET_APP_SEARCH] (state, search) {
      state.search = search
    }
  },
  getters: {
    collapsedState: state => state.collapsed,
    fullScreen: state => state.fullScreen,
    appTheme: state => state.theme,
    appSearch: state => state.search
  },
  actions: {}
}
