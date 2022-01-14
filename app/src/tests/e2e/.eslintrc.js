module.exports = {
  plugins: ['cypress'],
  env: {
    'cypress/globals': true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    strict: 'off',
    '@typescript-eslint/no-unused-vars': 0
  },
  overrides: [
    {
      extends: ['plugin:cypress/recommended'],
      files: ['src/tests/e2e/**/*.js'],
    },
  ],
  ignorePatterns: ['.eslintrc.js'],
};
