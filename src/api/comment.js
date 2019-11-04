import axios from 'utils/axios'

export const getPlayListComment = (id) => {
  return axios.request({
    /* /comment/playlist?id=705123491 */
    url: `/comment/playlist?id=${id}`,
    method: 'get'
  })
}

export const getMusicComment = (id) => {
  return axios.request({
    /* /comment/music?id=186016&limit=1 */
    url: `/comment/music?id=${id}`,
    method: 'get'
  })
}

export const getAlbumComment = (id) => {
  return axios.request({
    /* /comment/album?id=32311 */
    url: `/comment/album?id=${id}`,
    method: 'get'
  })
}
