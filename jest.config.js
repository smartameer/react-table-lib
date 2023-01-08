module.exports = {
  // transform: {
  //   '^.+\\.[t|j]sx?$': 'ts-jest'
  // },
  modulePathIgnorePatterns: ['node_modules', '.jest-test-results.json'],
  coverageThreshold: {
    global: {
      branches: 14,
      functions: 13,
      lines: 34,
      statements: 35
    }
  },
  testEnvironment: "jsdom",
  globals: {
    "IS_REACT_ACT_ENVIRONMENT": true
  }
}
