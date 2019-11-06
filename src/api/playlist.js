import axios from 'utils/axios'

// 获取未登录个性推荐歌单
export const getPersonalized = () => {
  return axios.request({
    url: '/personalized',
    method: 'get'
  })
}

// http://localhost:3000/playlist/detail?id=
// 获取歌单详情
export const getPlaylistDetail = (id) => {
  return axios.request({
    url: `/playlist/detail?id=${id}`,
    method: 'get'
  })
}

export const getSimilarPlaylist = (id) => {
  return axios.request({
    /* http://localhost:3000/simi/playlist?id=165340 */
    url: `/simi/playlist?id=${id}`,
    method: 'get'
  })
}
