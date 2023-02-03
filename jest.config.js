module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['app/**/*.(t|j)s(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: [
    '<rootDir>/app/**/*.test.(t|j)sx',
    '<rootDir>/app/**/*.test.(t|j)s',
  ],
}
