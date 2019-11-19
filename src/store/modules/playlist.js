import {
  SET_PLAY_LIST,
  SET_SEQUENCE_LIST,
  SET_CURRENT_INDEX,
  SET_PLAY_MODE,
  SET_PLAY_STATE
} from '../mutation-types'
import config from '@/config/config'
import { shuffle, findIndexById } from 'utils/shuffle'
const CURRENT_SONG = {
  name: '蓝眼音乐',
  artist: [{ name: 'blue eyes music' }],
  album: { name: 'blue eyes music' },
  durationStr: '00:00',
  durationNum: 0,
  picUrl: 'http://p2.music.126.net/t6pUXP9J35-tlp_F4b1_pA==/109951164107025135.jpg'
}

export default {
  state: {
    sequenceList: [],
    playList: [],
    currentIndex: -1
  },
  mutations: {
    [SET_SEQUENCE_LIST] (state, list) {
      state.sequenceList = list
    },
    [SET_PLAY_LIST] (state, list) {
      state.playList = list
    },
    [SET_CURRENT_INDEX] (state, index) {
      state.currentIndex = index
    }
  },
  getters: {
    sequenceList: state => state.sequenceList,
    playList: state => state.playList,
    currentIndex: state => state.currentIndex,
    currentSong: (state) => {
      return state.playList[state.currentIndex] || CURRENT_SONG
    }
  },
  actions: {
    sequencePlay ({ commit, state }, { list }) {
      commit(SET_SEQUENCE_LIST, list)
      commit(SET_PLAY_LIST, list)
      commit(SET_CURRENT_INDEX, 0)
      commit(SET_PLAY_MODE, config.PLAY_MODE.sequence)
      commit(SET_PLAY_STATE, true)
    },
    selectPlay ({ commit, state, rootState }, { list, index }) {
      commit(SET_SEQUENCE_LIST, list)
      if (rootState.player.playMode === config.PLAY_MODE.random) {
        let randomList = shuffle(list)
        console.log(randomList)
        commit(SET_PLAY_LIST, randomList)
        index = findIndexById(randomList, list[index])
      } else {
        commit(SET_PLAY_LIST, list)
      }
      commit(SET_CURRENT_INDEX, index)
      commit(SET_PLAY_STATE, true)
    }
  }
}
