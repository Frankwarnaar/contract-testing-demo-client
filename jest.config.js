module.exports = {
  rootDir: './',
  setupFiles: [
    './test/unit/setup/babel-polyfill.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  }
};
