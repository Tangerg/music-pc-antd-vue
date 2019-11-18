export function handleNewLine (str) {
  return str.replace(/\n/gi, '<br/>')
}

export function handlePicUrlSize (str, size) {
  if (!str) {
    return
  }
  return `${str}?param=${size}y${size}`
}
