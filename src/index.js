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
  let pointer: number = 0
  for (let index: number = 0; index < str.length; index++) {
    if (~found) {
      continue
    }
    if (str[index] !== subStr[pointer]) {
      pointer = 0
      continue
    }
    pointer++
    if (pointer === subStr.length) {
      found = index - pointer + 1
    }
  }
  return found
}
