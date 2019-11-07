import axios from 'utils/axios'
export const getArtist = (code, initial) => {
  return axios.request({
    /* /artist/list?cat=1001&initial=b */
    url: `/artist/list?cat=${code}&initial=${initial}`,
    method: 'get'
  })
}

export const getArtistMv = (id) => {
  return axios.request({
    /* /artist/mv?id=6452 */
    url: `/artist/mv?id=${id}`,
    method: 'get'
  })
}
