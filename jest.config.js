module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.md?$': 'markdown-loader-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  setupTestFrameworkScriptFile: './scripts/jest.init.js',
  moduleFileExtensions: ['js', 'jsx', 'json'],
};
