import { handlePlayCount } from 'utils/count'
import { createCoverByPlaylist } from './playlist'
import { createCoverByArtist } from './artist'
/* import { createCoverByAlbum } from './playlist' */
export default class Cover {
  constructor ({ playlist, fm, artist, album }) {
    this.playlist = playlist
    this.fm = fm
    this.artist = artist
    this.album = album
  }
}

// 由推荐歌单创建封面
export function createPlaylistCover (playlist) {
  return new Cover({
    playlist: createCoverByPlaylist(playlist)
  })
}

export function createArtistCover (artist) {
  return new Cover({
    artist: createCoverByArtist(artist)
  })
}
