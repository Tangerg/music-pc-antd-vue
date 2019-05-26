export default class ListInfo {
  constructor ({ name, coverImgUrl, creator, createTime, tags, description, descriptionOld, trackCount, playCount, subscribedCount, shareCount, commentCount }) {
    this.name = name // 歌单名称
    this.coverImgUrl = coverImgUrl // 歌单头像
    this.creator = creator
    this.createTime = createTime // 创建时间
    this.tags = tags // 歌单标签
    this.description = description // 歌单描述
    this.descriptionOld = descriptionOld // 歌单描述
    this.trackCount = trackCount // 歌单歌曲总数
    this.playCount = playCount// 歌单播放总数
    this.subscribedCount = subscribedCount // 歌单收藏总数
    this.shareCount = shareCount// 歌单分享总数
    this.commentCount = commentCount // 歌单评论总数
  }
}

function listCreator (creator) {
  return {
    creatorName: creator.nickname,
    avatarUrl: creator.avatarUrl,
    userId: creator.userId
  }
}

function handleDesc (desc) {
  let reg = new RegExp('\n', 'g')
  desc.replace(reg, '<br/>')
  return desc
}

function handleTags (tags) {
  let newTags = []
  newTags = tags.map((tag) => {
    return tag
  })
  return newTags/* .join(' / ') */
}

export function createListInfo (songList) {
  return new ListInfo({
    name: songList.name,
    coverImgUrl: songList.coverImgUrl,
    creator: listCreator(songList.creator),
    createTime: songList.createTime,
    tags: handleTags(songList.tags),
    description: handleDesc(songList.description),
    descriptionOld: songList.description,
    trackCount: songList.trackCount,
    playCount: songList.playCount,
    subscribedCount: songList.subscribedCount,
    shareCount: songList.shareCount,
    commentCount: songList.commentCount
  })
}
