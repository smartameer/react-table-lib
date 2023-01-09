module.exports = {
  // transform: {
  //   '^.+\\.[t|j]sx?$': 'ts-jest'
  // },
  modulePathIgnorePatterns: ['node_modules', '.jest-test-results.json'],
  coverageThreshold: {
    global: {
      branches: 84.5,
      functions: 98.5,
      lines: 98,
      statements: 98
    }
  },
  testEnvironment: "jsdom",
  globals: {
    "IS_REACT_ACT_ENVIRONMENT": true
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
}
