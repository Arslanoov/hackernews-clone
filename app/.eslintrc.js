module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['jest.config.js'],
  rules: {
    'prettier/prettier': 'error',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    '@typescript-eslint/default-param-last': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/no-danger': 0,
    'no-bitwise': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-plusplus': 0,
  },
};
