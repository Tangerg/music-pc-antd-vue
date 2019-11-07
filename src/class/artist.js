export default class Artist {
  constructor ({ id, accountId, name, alias, imageUrl, picUrl, albumSize, musicSize }) {
    this.id = id
    this.accountId = accountId
    this.name = name
    this.alias = alias
    this.imageUrl = imageUrl
    this.picUrl = picUrl
    this.albumSize = albumSize
    this.musicSize = musicSize
  }
}

/* {
      "img1v1Id": 109951163536269820,
      "topicPerson": 0,
      "picId": 109951163536274580,
      "albumSize": 32,
      "followed": false,
      "briefDesc": "",
      "musicSize": 178,
      "img1v1Url": "https://p2.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg",
      "alias": [
      "Vae"
    ],
      "trans": "",
      "picUrl": "https://p2.music.126.net/_D9P0JKRDYm3jEay9EfhRw==/109951163536274581.jpg",
      "name": "许嵩",
      "id": 5771,
      "accountId": 31265745,
      "picId_str": "109951163536274581",
      "img1v1Id_str": "109951163536269820"
    }, */
export function createArtist (artist) {
  return new Artist({
    id: artist.id,
    accountId: artist.accountId,
    imageUrl: artist.img1v1Url + '?param=200y200',
    name: artist.name,
    alias: artist.alias[0],
    picUrl: artist.picUrl,
    albumSize: artist.albumSize,
    musicSize: artist.musicSize,
  })
}
