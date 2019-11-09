import axios from 'utils/axios'

export const getUserDetail = (id) => {
  return axios.request({
    url: `/user/detail?uid=${id}`,
    method: 'get'
  })
}

export const getUserPlaylist = (id) => {
  return axios.request({
    url: `/user/playlist?uid=${id}`,
    method: 'get'
  })
}
