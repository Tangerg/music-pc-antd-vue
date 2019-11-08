export function handleNewLine (str) {
  return str.replace(/\n/gi, '<br/>')
}

export function handlePicUrlSize (str, size) {
  return `${str}?param=${size}y${size}`
}
