module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'index.js',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  moduleDirectories: ['node_modules'],
  testRegex: '.+\\.test\\.js$',
  transform: {
    "^.+\\.js$": "babel-jest",
  },
}
