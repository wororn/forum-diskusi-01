module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "no-unused-vars:": "off",
    "no-undef": "off",
    "no-console": "off",     // Turn off the no-console rule
    "indent": "off",  // Enforce 2-space indentation as an error
    "semi": "off", // Enforce semicolons at the end of statements
    "no-unescaped-entities": "off",
    "react/prop-types": [enabled=0],
    "react/jsx-key": [enabled, { "checkFragmentShorthand": false }]
    },
}