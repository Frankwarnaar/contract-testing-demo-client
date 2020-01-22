module.exports = {
  rootDir: './',
  setupFiles: [
    './test/unit/setup/babel-polyfill.js',
    // './test/unit/setup/fetch-mock.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  }
};
