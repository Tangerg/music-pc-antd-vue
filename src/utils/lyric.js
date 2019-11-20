// 歌词解析
export function parseLyric (lrc) {
  if (!lrc) {
    return []
  }
  // 先将歌词分割成多个数组
  const lyrics = lrc.split('\n')
  const lrcObj = []
  // 循环匹配
  for (let i = 0; i < lyrics.length; i++) {
    const lyric = decodeURIComponent(lyrics[i])
    const timeReg = /\[\d*:\d*((\.|:)\d*)*\]/g
    const timeRegExpArr = lyric.match(timeReg)

    if (!timeRegExpArr) continue
    const line = lyric.replace(timeReg, '')
    // 转换时间
    for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
      const t = timeRegExpArr[k]

      const min = Number(String(t.match(/\[\d*/i)).slice(1))
      const sec = Number(String(t.match(/:\d*.\d*/i)).slice(1))
      const time = min * 60 + sec
      if (line !== '') {
        lrcObj.push({ time: time, line })
      }
    }
  }
  return lrcObj
}
