export function handleSongTime (time) {
  let minute = addZero(Math.floor(time / 1000 / 60))
  let second = addZero(Math.floor(time / 1000 % 60))
  return `${minute}:${second}`
}

export function addZero (num) {
  if (num < 10) {
    return `0${num}`
  } else {
    return num
  }
}
export function formatDate (date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  date = date instanceof Date ? date : new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : addZero(str)
      )
    }
  }
  return fmt
}
