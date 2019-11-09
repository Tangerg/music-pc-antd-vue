export default class User {
  constructor ({ userId, nickname, level, listenSongs, avatarUrl, backgroundUrl, signature, eventCount, follows, followeds }) {
    this.userId = userId
    this.nickname = nickname
    this.level = level
    this.listenSongs = listenSongs
    this.avatarUrl = avatarUrl
    this.backgroundUrl = backgroundUrl
    this.signature = signature
    this.eventCount = eventCount
    this.follows = follows
    this.followeds = followeds
  }
}

export function createUser (user) {
  return new User({
    userId: user.profile.userId,
    nickname: user.profile.nickname,
    level: user.level,
    listenSongs: user.listenSongs,
    avatarUrl: user.profile.avatarUrl,
    backgroundUrl: user.profile.backgroundUrl,
    signature: user.profile.signature,
    eventCount: user.profile.eventCount,
    follows: user.profile.follows,
    followeds: user.profile.followeds
  })
}
