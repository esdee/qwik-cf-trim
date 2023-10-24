/* eslint-env node */

const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic',
  ],
  ignorePatterns: ['node_modules/', 'dist/'],
  parserOptions: {
    project,
  },
  rules: {
    // Otherwise forcess use of Interface over Type
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
