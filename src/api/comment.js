import axios from 'utils/axios'

export const getPlayListComment = (id) => {
  return axios.request({
    /* /comment/playlist?id=705123491 */
    url: `/comment/playlist?id=${id}`,
    method: 'get'
  })
}
