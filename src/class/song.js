import { handleSongTime } from 'utils/time'
import { handlePicUrlSize } from 'utils/str'
export default class Song {
  constructor ({ name, id, artist, album, durationStr, durationNum, picUrl, picUrlOriginal, mv }) {
    this.name = name
    this.id = id
    this.artist = artist
    this.album = album
    this.durationStr = durationStr
    this.durationNum = durationNum
    this.picUrl = picUrl
    this.picUrlOriginal = picUrlOriginal
    this.mv = mv
  }
}

function songArtist (artists) {
  return artists.map((artist) => {
    return {
      id: artist.id,
      name: artist.name
    }
  })
}

function songAlbum (album) {
  return {
    id: album.id,
    name: album.name
  }
}

export function createSong (track) {
  return new Song({
    name: track.name,
    id: track.id,
    artist: songArtist(track.ar),
    album: songAlbum(track.al),
    picUrl: handlePicUrlSize(track.al.picUrl, 100),
    picUrlOriginal: track.al.picUrl,
    durationStr: handleSongTime(track.dt),
    durationNum: track.dt / 1000,
    mv: track.mv
  }
  )
}

export function createSongBySimilar (track) {
  return new Song({
    name: track.name,
    id: track.id,
    artist: songArtist(track.artists),
    album: songAlbum(track.album),
    picUrl: handlePicUrlSize(track.album.picUrl, 100),
    picUrlOriginal: track.album.picUrl,
    durationStr: handleSongTime(track.duration),
    durationNum: track.duration / 1000,
    mv: track.mvid
  }
  )
}
