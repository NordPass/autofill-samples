import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
    suspicious: 'error',
    perf: 'error',
  },
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'react'],
  ignorePatterns: ['dist/**'],
  rules: {
    'no-console': 'error',
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'react/react-in-jsx-scope': 'off',
    'react/only-export-components': 'error',
    // The frame samples must behave like real embedded forms: a sandbox changes what autofill
    // sees, and CreditCardFrames reaches into its same-origin frames via `contentDocument`.
    'react/iframe-missing-sandbox': 'off',
  },
});
