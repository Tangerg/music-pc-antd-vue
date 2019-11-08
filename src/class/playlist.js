import { handlePlayCount } from 'utils/count'
import { formatDate } from 'utils/time'
import { handleNewLine, handlePicUrlSize } from 'utils/str'
export default class Playlist {
  constructor ({ id, coverImgUrl, name, creator, createTime, tags, copywriter, description, trackCount, playCount, shareCount, commentCount, subscribedCount }) {
    this.id = id
    this.coverImgUrl = coverImgUrl
    this.name = name
    this.creator = creator
    this.createTime = createTime
    this.tags = tags
    this.copywriter = copywriter
    this.description = description
    this.trackCount = trackCount
    this.playCount = playCount
    this.shareCount = shareCount
    this.commentCount = commentCount
    this.subscribedCount = subscribedCount
  }
}
class Creator {
  constructor ({ userId, nickname, avatarUrl }) {
    this.userId = userId
    this.nickname = nickname
    this.avatarUrl = avatarUrl
  }
}
function createCreator (creator) {
  return new Creator({
    userId: creator.userId,
    nickname: creator.nickname,
    avatarUrl: creator.avatarUrl
  })
}
export function createCoverByPlaylist (playlist) {
  return new Playlist({
    id: playlist.id,
    coverImgUrl: handlePicUrlSize(playlist.picUrl, 300),
    name: playlist.name,
    playCount: handlePlayCount(playlist.playCount),
    copywriter: playlist.copywriter
  })
}
export function createPlaylistDesc (playlist) {
  return new Playlist({
    id: playlist.id,
    coverImgUrl: handlePicUrlSize(playlist.coverImgUrl, 300),
    name: playlist.name,
    creator: createCreator(playlist.creator),
    createTime: formatDate(playlist.createTime, 'yyyy-MM-dd'),
    tags: playlist.tags,
    description: handleNewLine(playlist.description),
    trackCount: playlist.trackCount,
    playCount: handlePlayCount(playlist.playCount),
    shareCount: playlist.shareCount,
    commentCount: playlist.commentCount,
    subscribedCount: playlist.subscribedCount
  })
}

export function createPlaylistBySimilar (playlist) {
  return new Playlist({
    id: playlist.id,
    name: playlist.name,
    coverImgUrl: handlePicUrlSize(playlist.coverImgUrl, 300),
    playCount: handlePlayCount(playlist.playCount)
  })
}
