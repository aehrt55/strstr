const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier', 'plugin:import/errors', 'plugin:flowtype/recommended'],
  plugins: ['prettier', 'eslint-plugin-import', 'eslint-plugin-flowtype'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  globals: {
    renderTree: true,
    omitChildren: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'newline-per-chained-call': 0,
    'no-console': 'error',
    'prefer-template': 'error',
    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: false,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    semi: ['error', 'never'],
    'import/no-commonjs': 'error'
  },
}
