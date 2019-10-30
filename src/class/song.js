import { handleSongTime } from 'utils/time'
export default class Song {
  constructor ({ name, id, artist, album, duration, picUrl }) {
    this.name = name
    this.id = id
    this.artist = artist
    this.album = album
    this.duration = duration
    this.picUrl = picUrl
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
    picUrl: track.al.picUrl,
    duration: handleSongTime(track.dt)
  }
  )
}
