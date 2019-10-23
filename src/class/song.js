import { handleSongTime } from '../utils/time'
export default class Song {
  constructor ({ name, id, artist, album, time, picUrl }) {
    this.name = name
    this.id = id
    this.artist = artist
    this.album = album
    this.time = time
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

export function createSong (songList) {
  return new Song({
    name: songList.name,
    id: songList.id,
    artist: songArtist(songList.ar),
    album: songAlbum(songList.al),
    picUrl: songList.al.picUrl,
    time: handleSongTime(songList.dt)
  }
  )
}
