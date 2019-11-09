import { handlePicUrlSize } from 'utils/str'
import { formatDate } from 'utils/time'
export default class Album {
  constructor ({ name, id, artist, publishTime, picUrl }) {
    this.name = name
    this.id = id
    this.artist = artist
    this.publishTime = publishTime
    this.picUrl = picUrl
  }
}

function albumArtist (artist) {
  return {
    id: artist.id,
    name: artist.name
  }
}

export function createAlbumCover (album) {
  return new Album({
    name: album.name,
    id: album.id,
    artist: albumArtist(album.artist),
    picUrl: handlePicUrlSize(album.picUrl, 300),
    publishTime: formatDate(album.publishTime, 'yyyy-MM-dd')
  })
}
