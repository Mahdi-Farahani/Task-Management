module.exports = {
  extends: ['react-app'],
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['prettier', 'import', 'react'],
  rules: {
    'arrow-parens': 0,
    'react-hooks/rules-of-hooks': 'warn',
    'no-undef': 'warn',
    'no-unused-expressions': 'warn',
    'no-restricted-globals': 'warn',
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'auto',
        semi: true,
        bracketSameLine: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
    },
  ],
  ignorePatterns: ['node_modules/', 'build/'],
};
