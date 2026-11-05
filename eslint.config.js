// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import vitest from '@vitest/eslint-plugin';

export default [
  js.configs.recommended,
  {
    languageOptions: { globals: globals.node },
  },
  {
    files: ['tests/**'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
];