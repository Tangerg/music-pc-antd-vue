export function handleSongTime (time) {
  let minute = Math.floor(time / 1000 / 60)
  let second = Math.floor(time / 1000 % 60)
  minute = addZero(minute)
  second = addZero(second)
  return `${minute}:${second} `
}

function addZero (num) {
  if (num < 10) {
    return `0${num}`
  } else {
    return num
  }
}
