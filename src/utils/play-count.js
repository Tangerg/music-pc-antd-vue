export function playCount (num) {
  if (num / 100000000 > 1) {
    if (num / 10000 > 1) {
      return `${Math.floor(num / 100000000)}亿${Math.floor(num % 100000000 / 10000)}万`
    }
  } else if (num / 10000 > 1) {
    return `${Math.floor(num / 10000)}万`
  } else {
    return num
  }
}
