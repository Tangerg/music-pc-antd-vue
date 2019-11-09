import { handlePlayCount } from 'utils/count'
import { createPlaylistCover } from './playlist'
import { createArtistCover } from './artist'
import { createAlbumCover } from './album'
export default class Cover {
  constructor ({ playlist, fm, artist, album }) {
    this.playlist = playlist
    this.fm = fm
    this.artist = artist
    this.album = album
  }
}

// 由推荐歌单创建封面
export function createCoverByPlaylist (playlist) {
  return new Cover({
    playlist: createPlaylistCover(playlist)
  })
}

export function createCoverByArtist (artist) {
  return new Cover({
    artist: createArtistCover(artist)
  })
}
export function createCoverByAlbum (album) {
  return new Cover({
    album: createAlbumCover(album)
  })
}
