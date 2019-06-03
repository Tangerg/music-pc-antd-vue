import { handleSongTime } from '../utils/time'
export default class Song {
  constructor ({ name, id, artist, album, time }) {
    this.name = name
    this.id = id
    this.artist = artist
    this.album = album
    this.time = time
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

export function createSong (songList) {
  return new Song({
    name: songList.name,
    id: songList.id,
    artist: songArtist(songList.ar),
    album: songAlbum(songList.al),
    time: handleSongTime(songList.dt)
  }
  )
}
