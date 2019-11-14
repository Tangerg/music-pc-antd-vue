import axios from 'utils/axios'

export const getHotSearch = () => {
  return axios.request({
    url: '/search/hot',
    method: 'get'
  })
}
export const getSearch = (keywords, type, offset) => {
  return axios.request({
    // http://localhost:3000/search?keywords=12&type=100&offset=2
    url: `/search?keywords=${keywords}&type=${type || ''}&offset=${offset || ''}`,
    method: 'get'
  })
}
