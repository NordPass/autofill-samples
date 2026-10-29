import { defineConfig } from 'oxfmt';

export default defineConfig({
  printWidth: 100,
  arrowParens: 'avoid',
  singleQuote: true,
  ignorePatterns: ['dist/**', 'package-lock.json'],
});
