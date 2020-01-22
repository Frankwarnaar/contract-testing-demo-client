import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: 'src/index.js',
  output: {
    file: 'src/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve({
      jsnext: true,
      preferBuiltins: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    json()
  ]
}
