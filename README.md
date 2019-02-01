# strstr practice
## Description
練習使用 for loop 實現 `strstr` 方法

## Usage

```bash
yarn add @aehrt55/strstr
```

```javascript
import strstr from '@aehrt55/strstr'

expect(strstr('Function name is strstr', 'name')).toBe(9)
expect(strstr('Function name is strstr', 'Name')).toBe(-1)
expect(() => strstr('Function name is strstr')).toThrow(new Error('strstr should pass two string'))
```
