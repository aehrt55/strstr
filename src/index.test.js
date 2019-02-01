import strstr from './index'

describe('strstr', () => {
  it('should find `name` in `Function name is strstr` and return the position', () => {
    expect(strstr('Function name is strstr', 'name')).toBe(9)
  })
  it('should find `aabc` in `aaabc` and return the position', () => {
    expect(strstr('aaabc', 'aabc')).toBe(1)
  })
  it('should find `aabc` in `aabc` and return the position', () => {
    expect(strstr('aabc', 'aabc')).toBe(0)
  })
  it('should find `name` in `Function name is strstr` and return the position', () => {
    expect(strstr('Function name is strstr', 'name')).toBe(9)
    expect(strstr('aaabc', 'aabc')).toBe(1)
  })
  it('should NOT find `Name` in `Function name is strstr` and return -1', () => {
    expect(strstr('Function name is strstr', 'Name')).toBe(-1)
  })
  it('should return -1 when second string is empty', () => {
    expect(strstr('Function name is strstr', '')).toBe(-1)
  })
  it('should return -1 when first string is shorter than second string', () => {
    expect(strstr('hello', 'hello, world!')).toBe(-1)
  })
  it('should throw exception if args are NOT passed', () => {
    expect(() => strstr('Function name is strstr')).toThrow(new Error('strstr should pass two string'))
    expect(() => strstr()).toThrow(new Error('strstr should pass two string'))
  })
  it('should throw exception if args are NOT type of string', () => {
    expect(() => strstr(1, 'Function name is strstr')).toThrow(new Error('strstr should pass two string'))
    expect(() => strstr('Function name is strstr', {})).toThrow(new Error('strstr should pass two string'))
  })
})
