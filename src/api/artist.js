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

export const getArtistTop50 = (id) => {
  return axios.request({
    /* /artist/top/song?id=6452 */
    url: `/artist/top/song?id=${id}`,
    method: 'get'
  })
}

export const getArtistAlbum = (id) => {
  return axios.request({
    /* http:/artist/album?id=3684 */
    url: `/artist/album?id=${id}`,
    method: 'get'
  })
}
