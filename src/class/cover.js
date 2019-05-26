export default class Cover {
  constructor ({ id, type, image, name }) {
    this.coverId = id
    this.coverType = type
    this.coverImg = image
    this.coverName = name
  }
}

/** 歌单数据
 "id": 2792976270,
 "type": 0,
 "name": "你肯定能熬到不喜欢TA的那一天",
 "copywriter": "编辑推荐：希望你开心，成为更好的自己",
 "picUrl": "https://p2.music.126.net/goMWO-L7OLNWU5u4rSkgRA==/109951164073778677.jpg",
 "canDislike": false,
 "playCount": 5790524.5,
 "trackCount": 61,
 "highQuality": false,
 "alg": "featured"
 * */
export function createSongListCover (songList) {
  return new Cover({
    id: songList.id,
    type: songList.type,
    image: songList.picUrl,
    name: songList.name
  })
}
