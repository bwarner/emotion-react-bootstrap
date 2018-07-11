module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  setupTestFrameworkScriptFile: './scripts/jest.init.js',
  moduleFileExtensions: ['js', 'jsx', 'json'],
};
