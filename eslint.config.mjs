import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  {
    ignores: [
      '**/node_modules/**',
      '.next/**',
      'dist/**',
      'release/**',
      'coverage/**',
      'playwright-report/**',
      'test-results/**',
      'packages/*/dist/**',
      'packages/**/dist/**',
      'next-env.d.ts',
      // Third-party submodules are linted in their own repositories.
      'packages/Vibe-Workflow/**',
      'packages/Open-Poe-AI/**',
      'packages/Open-AI-Design-Agent/**',
      // Service worker runs in a worker global scope with its own globals.
      'public/sw.js',
    ],
  },
  ...nextVitals,
  {
    rules: {
      // Gradual adoption: keep these visible without blocking the build yet.
      'react/no-unescaped-entities': 'warn',
      '@next/next/no-img-element': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'import/no-anonymous-default-export': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      // Errors we do enforce:
      'no-debugger': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'react/jsx-key': 'error',
      'react-hooks/rules-of-hooks': 'error',
      // React Compiler migration rules (Next 16 defaults): track as warnings
      // until the studio components are refactored for compiler-friendliness.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
      'react-hooks/refs': 'warn',
      'react-hooks/immutability': 'warn',
      'react-hooks/preserve-manual-memoization': 'warn',
    },
  },
  {
    files: ['tests/**/*.{js,jsx}'],
    rules: {
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'jsx-a11y/alt-text': 'off',
    },
  },
  {
    files: ['scripts/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
];

export default eslintConfig;
