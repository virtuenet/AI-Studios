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
      'react-hooks/exhaustive-deps': 'error',
      // Errors we do enforce:
      'no-debugger': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'react/jsx-key': 'error',
      'react-hooks/rules-of-hooks': 'error',
      // React Compiler migration rules (Next 16 defaults): track as warnings
      // until the studio components are refactored for compiler-friendliness.
      'react-hooks/set-state-in-effect': 'error',
      'react-hooks/purity': 'error',
      'react-hooks/refs': 'error',
      'react-hooks/immutability': 'error',
      'react-hooks/preserve-manual-memoization': 'error',
    },
  },
  {
    files: ['packages/studio/**/*.{js,jsx}'],
    rules: {
      // The studio package is bundled by both Next.js and Vite (Electron), so
      // next/image is unavailable. Images use loading="lazy" decoding="async".
      '@next/next/no-img-element': 'off',
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
