/* eslint-env node */
module.exports = {
  "globals": {
    "module": "readonly"
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off'
    // свои кастомные правила, если нужно
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
