import { formatDate } from 'utils/time'
export default class Comment {
  constructor ({ commentId, user, content, time, beReplied, likedCount }) {
    this.commentId = commentId
    this.user = user
    this.content = content
    this.time = time
    this.beReplied = beReplied
    this.likedCount = likedCount
  }
}
class User {
  constructor ({ userId, avatarUrl, nickname }) {
    this.userId = userId
    this.avatarUrl = avatarUrl
    this.nickname = nickname
  }
}

function createUser (user) {
  return new User({
    userId: user.userId,
    avatarUrl: user.avatarUrl,
    nickname: user.nickname
  })
}

function handleBeReplied (beReplied) {
  if (beReplied.length === 0) {
    return {}
  } else {
    return {
      beRepliedCommentId: beReplied[0].beRepliedCommentId,
      content: beReplied[0].content,
      user: createUser(beReplied[0].user)
    }
  }
}

export function createComment (comment) {
  return new Comment({
    commentId: comment.commentId,
    user: createUser(comment.user),
    content: comment.content,
    time: formatDate(comment.time, 'yyyy-MM-dd hh:mm'),
    likedCount: comment.likedCount,
    beReplied: handleBeReplied(comment.beReplied)
  })
}
