module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    'func-names': 'off',
    'import/no-named-as-default': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/label-has-associated-control': 0,
  },
};
