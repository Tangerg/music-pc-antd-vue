/**
 * 播发器相关相关store
 */
import { SET_PLAY_STATE, SET_PLAY_MODE, SET_DRAWER_STATE } from '../mutation-types'
import config from '@/config/config'
export default {
  state: {
    playState: false, // 播放状态：true:播放
    playMode: config.PLAY_MODE.sequence, // 播放模式
    drawerState: false // 弹出层状态
  },
  mutations: {
    [SET_PLAY_STATE] (state, flag) {
      state.playState = flag
    },
    [SET_DRAWER_STATE] (state, flag) {
      state.drawerState = flag
    },
    [SET_PLAY_MODE] (state, mode) {
      state.playMode = mode
    }
  },
  getters: {
    playState: state => state.playState,
    drawerState: state => state.drawerState,
    playMode: state => state.playMode
  },
  actions: {
  }
}
