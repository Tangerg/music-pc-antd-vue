import { parseLyric } from 'utils/lyric'
const STATE_PAUSE = 0
const STATE_PLAYING = 1

function defaultHandler () {}

export default class Lyric {
  constructor ({ lyricArr, tLyricArr, lyricUser, transUser, handler = defaultHandler }) {
    this.lyricArr = lyricArr
    this.lyricUser = lyricUser
    this.transUser = transUser
    this.handler = handler
    this.state = STATE_PAUSE
    this.currentIndex = 0
    this.currentLine = {}
  }
  _findCurNum (time) {
    for (let i = 0; i < this.lyricArr.length; i++) {
      if (time <= this.lyricArr[i].time) {
        return i
      }
    }
    return this.lyricArr.length - 1
  }

  _callHandler (i) {
    if (i < 0) {
      return
    }
    this.handler({
      lineNum: i,
      text: this.lyricArr[i].text,
      txt: this.lyricArr[i].txt
    })
  }

  _keepPlay (curNum) {
    if (curNum === this.lyricArr.length) {
      clearTimeout(this.timer)
      return
    }
    let delay = this.lyricArr[curNum].time * 1000 - (new Date() - this.startStamp)
    this.timer = setTimeout(() => {
      this.currentIndex = curNum
      this.currentLine = this.lyricArr[curNum]
      if (curNum < this.lyricArr.length && this.state === STATE_PLAYING) {
        this._callHandler(curNum++)
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
    this.startStamp = new Date() - startTime
    if (curNum < this.lyricArr.length) {
      clearTimeout(this.timer)
      this._keepPlay(curNum)
    }
  }

  togglePlay () {
    let now = +new Date()
    if (this.state === STATE_PLAYING) {
      this.stop()
      this.pauseStamp = now
    } else {
      this.state = STATE_PLAYING
      this.play((this.pauseStamp || now) - (this.startStamp || now), true)
      this.pauseStamp = 0
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
function insertLyric (long, short) {
  short.forEach((temp) => {
    let index = long.findIndex((item) => {
      return item.time === temp.time
    })
    long[index].txt = temp.text
  })
  return long
}
function mergeLyric (lyric, tLyric) {
  if (!lyric.length) {
    return
  }
  if (!tLyric.length) {
    return lyric
  }
  if (lyric.length > tLyric.length) {
    return insertLyric(lyric, tLyric)
  } else {
    return insertLyric(tLyric, lyric)
  }
}

export function formatLyric (lyricObj, handler) {
  return new Lyric({
    lyricArr: mergeLyric(parseLyric(lyricObj.lrc.lyric), parseLyric(lyricObj.tlyric.lyric)),
    lyricUser: lyricObj.lyricUser,
    transUser: lyricObj.transUser,
    handler: handler
  })
}
