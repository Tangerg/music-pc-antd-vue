import axios from 'utils/axios'

export const getRecommendSong = () => {
  return axios.request({
    url: '/personalized/newsong',
    method: 'get'
  })
}
// 获取歌曲播放地址
export const getPlaySongSource = (id) => {
  return axios.request({
    url: `/song/url?id=${id}`,
    method: 'get'
  })
}

// 获取歌曲播放地址
export const getSimilarSong = (id) => {
  return axios.request({
    /* /simi/song?id=347230 */
    url: `/simi/song?id=${id}`,
    method: 'get'
  })
}

// 获取歌曲播放地址
export const getPlaySongLyric = (id) => {
  return axios.request({
    /* /lyric?id=33894312 */
    url: `/lyric?id=${id}`,
    method: 'get'
  })
}
