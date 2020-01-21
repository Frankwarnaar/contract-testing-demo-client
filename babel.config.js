module.exports = {
  env: {
    test: {
      presets: [
        [
          'env',
          { targets: { node: true } }
        ]
      ],
    }
  }
}
