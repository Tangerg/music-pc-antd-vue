import { parseLyric } from 'utils/lyric'
const STATE_PAUSE = 0
const STATE_PLAYING = 1

export default class Lyric {
  constructor ({ lyricArr, tLyricArr, lyricUser, transUser }) {
    this.lyricArr = lyricArr
    this.lyricUser = lyricUser
    this.transUser = transUser
    this.state = STATE_PAUSE
    this.currentIndex = 0
  }
  _findCurNum (time) {
    for (let i = 0; i < this.lyricArr.length; i++) {
      if (time <= this.lyricArr[i].time) {
        return i
      }
    }
    return this.lyricArr.length - 1
  }
  _keepPlay (curNum) {
    if (curNum === this.lyricArr.length) {
      clearTimeout(this.timer)
      return
    }
    let delay = this.lyricArr[curNum].time * 1000 - (new Date() - this.startStamp)
    this.timer = setTimeout(() => {
      this.currentIndex = curNum
      if (curNum < this.lyricArr.length && this.state === STATE_PLAYING) {
        curNum++
        this._keepPlay(curNum)
      }
    }, delay)
  }

  play (startTime = 0) {
    if (!this.lyricArr.length) {
      return
    }
    this.state = STATE_PLAYING
    let curNum = this._findCurNum(startTime)
    this.startStamp = new Date() - startTime * 1000 // *1000将秒转成毫秒！！！
    if (curNum < this.lyricArr.length) {
      clearTimeout(this.timer)
      this._keepPlay(curNum)
    }
  }

  togglePlay (pauseTime = 0) {
    if (this.state === STATE_PLAYING) {
      this.stop()
    } else {
      this.play(pauseTime)
    }
  }

  stop () {
    this.state = STATE_PAUSE
    clearTimeout(this.timer)
  }

  seek (offset) {
    this.play(offset)
  }
}
function insertLyric (lyric, tLyric) {
  tLyric.forEach((temp) => {
    let index = lyric.findIndex((item) => {
      return item.time === temp.time
    })
    lyric[index].tline = temp.line
  })
  return lyric
}
function mergeLyric (lyric, tLyric) {
  if (!lyric.length) {
    return
  }
  if (!tLyric.length) {
    return lyric
  }
  let tempArr = []
  const diff = lyric.length - tLyric.length
  if (diff < 0) {
    for (let i = 0; i < -diff; i++) {
      tempArr[i].tline = tLyric[i].line
      tempArr[i].time = tLyric[i].time
    }
    tempArr.concat(lyric)
    return insertLyric(tempArr, tLyric)
  } else {
    tempArr = lyric
    return insertLyric(tempArr, tLyric)
  }
}

export function formatLyric (lyricObj) {
  return new Lyric({
    lyricArr: mergeLyric(parseLyric(lyricObj.lrc.lyric), parseLyric(lyricObj.tlyric.lyric)),
    lyricUser: lyricObj.lyricUser,
    transUser: lyricObj.transUser
  })
}
