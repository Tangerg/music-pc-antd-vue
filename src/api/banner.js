import axios from 'utils/axios'
export const getBanner = () => {
  return axios.request({
    url: '/banner',
    method: 'get'
  })
}
