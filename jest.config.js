module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.md?$': 'markdown-loader-jest',
  },
  testURL: 'http://localhost/',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./scripts/jest.init.js'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/scripts/**',
    '!**/stories/**',
    '!**/out/**',
    '!**/coverage/**',
    '!**/dist/**',
    '!*.config.js',
  ],
};
