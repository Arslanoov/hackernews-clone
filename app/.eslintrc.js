module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier'
  ],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'prettier/prettier': 'error',

    'react/function-component-definition': [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/default-param-last': 0,
  }
};