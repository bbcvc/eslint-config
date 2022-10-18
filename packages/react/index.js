module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@bbcvc/eslint-config-ts',
  ],
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
