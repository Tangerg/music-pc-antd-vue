import axios from 'utils/axios'

// 获取未登录个性推荐歌单
export const getRecommendPlaylist = () => {
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

export const getPlaylistHotTags = () => {
  return axios.request({
    /* http://localhost:3000/playlist/hot */
    url: `/playlist/hot`,
    method: 'get'
  })
}

export const getPlaylistAllTags = () => {
  return axios.request({
    /* http://localhost:3000/playlist/catlist */
    url: `/playlist/catlist`,
    method: 'get'
  })
}

export const getPlaylistByCat = (cat, limit) => {
  return axios.request({
    /* /top/playlist?keywords=华语 */
    url: `/top/playlist?cat=${cat}&limit=${limit || 30}`,
    method: 'get'
  })
}
