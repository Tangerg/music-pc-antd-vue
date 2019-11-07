import { SET_ARTIST_INFO } from '../mutation-types'

export default {
  state: {
    artist: {}
  },
  mutations: {
    [SET_ARTIST_INFO] (state, artist) {
      state.artist = artist
    }
  },
  getters: {
    artistInfo: state => state.artist
  },
  actions: {}
}
