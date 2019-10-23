import axios from 'utils/axios'

// 获取歌曲播放地址
export const getPlaySong = (id) => {
  return axios.request({
    url: `/song/url?id=${id}`,
    method: 'get'
  })
}
