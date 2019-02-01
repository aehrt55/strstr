// @flow

export default function strstr(str: string, subStr: string): number {
  if (typeof str !== 'string' || typeof subStr !== 'string') {
    throw new Error('strstr should pass two string')
  }
  let found: number = -1
  if (subStr.length === 0) {
    return found
  }
  if (str.length < subStr.length) {
    return found
  }
  for (let index: number = 0; index < str.length; index++) {
    for (let pointer: number = 0; pointer < subStr.length; pointer++) {
      if (str[index + pointer] !== subStr[pointer]) {
        break
      }
      if (pointer + 1 === subStr.length) {
        found = index
      }
    }
    if (~found) {
      break
    }
  }
  return found
}
