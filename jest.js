module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['**/__tests__/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
