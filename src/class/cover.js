import { handlePlayCount } from 'utils/count'
export default class Cover {
  constructor ({ id, type, picUrl, name, copywriter, playCount, trackCount }) {
    this.coverId = id
    this.coverType = type
    this.coverName = name
    this.coverCopywriter = copywriter
    this.coverImg = picUrl
    this.coverPlayCount = playCount
    this.coverTrackCount = trackCount
  }
}

/** 推荐歌单数据
  {
     "id": 2409342460,
     "type": 0,
     "name": "[VIP专享] 一周新歌推荐",
     "copywriter": "编辑推荐：每周VIP专享歌曲，编辑精选推荐！",
     "picUrl": "https://p2.music.126.net/fusd64npZfRyCR6bIIGMLQ==/109951164447637273.jpg",
     "canDislike": false,
     "trackNumberUpdateTime": 1572019200000, //
     "playCount": 204221088,  //播放数
     "trackCount": 20,  //歌曲总数
     "highQuality": false,
     "alg": "featured"
  },
*/
// 由推荐歌单创建封面
export function createPlayListCoverByRecommend (playList) {
  return new Cover({
    id: playList.id,
    type: playList.type,
    name: playList.name,
    copywriter: playList.copywriter,
    picUrl: playList.picUrl + '?param=300y300',
    playCount: handlePlayCount(playList.playCount),
    trackCount: playList.trackCount
  })
}

export function createPlayListCoverBySimilar (playList) {
  return new Cover({
    id: playList.id,
    name: playList.name,
    picUrl: playList.coverImgUrl + '?param=300y300',
    playCount: handlePlayCount(playList.playCount),
  })
}
