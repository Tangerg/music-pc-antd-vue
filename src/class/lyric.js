import { parseLyric } from 'utils/lyric'
export default class Lyric {
  constructor ({ lyric, tlyric, lyricuser, transuser }) {
    this.lyric = lyric
    this.tlyric = tlyric
    this.lyricuser = lyricuser
    this.transuser = transuser
  }
}

export function formatLyric (lyricObj) {
  return new Lyric({
    lyric: parseLyric(lyricObj.lrc.lyric),
    tlyric: parseLyric(lyricObj.tlyric.lyric),
    lyricuser: lyricObj.lyricUser,
    transuser: lyricObj.transUser
  })
}
