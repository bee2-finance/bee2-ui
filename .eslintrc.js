module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', 'eslint:recommended'],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [2, 'single'], // https://eslint.org/docs/2.0.0/rules/quotes
    semi: [2, 'never'], // https://eslint.org/docs/2.0.0/rules/semi
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ]
}
