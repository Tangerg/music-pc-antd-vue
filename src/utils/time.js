export function handleSongTime (time) {
  let minute = addZero(Math.floor(time / 1000 / 60))
  let second = addZero(Math.floor(time / 1000 % 60))
  return `${minute}:${second} `
}

function addZero (num) {
  if (num < 10) {
    return `0${num}`
  } else {
    return num
  }
}
