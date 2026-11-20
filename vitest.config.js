import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    include: ['tests/unit/**/*.test.{js,jsx}', 'tests/components/**/*.test.{js,jsx}', 'tests/accessibility/**/*.test.{js,jsx}', 'tests/routes/**/*.test.{js,jsx}'],
    // Unit tests (models, muapi, middleware) run in node environment
    // Component tests override with jsdom via @vitest-environment docblock
    exclude: ['node_modules', 'dist', '.next', 'release'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      // Gate coverage on the pure-logic modules that unit tests exercise.
      // UI components and the data-only model catalogs are excluded so the
      // threshold reflects meaningful, stable coverage rather than data size.
      include: [
        'packages/studio/src/modelCapabilities.ts',
        'packages/studio/src/imageSizing.ts',
        'packages/studio/src/persistKey.ts',
        'packages/studio/src/i18nUtils.ts',
        'packages/studio/src/modelParameters.ts',
        'packages/studio/src/imageInputContracts.ts',
        'packages/studio/src/utils/errorReporter.js',
        'packages/studio/src/utils/generationLifecycle.ts',
        'packages/studio/src/utils/formatError.ts',
        'packages/studio/src/utils/downloadImage.ts',
        'packages/studio/src/utils/clientIds.ts',
        'lib/uploadProxyTarget.js',
        'lib/session.js',
        'lib/logger.js',
        'packages/studio/src/hooks/**/*.js',
      ],
      exclude: [
        'packages/studio/src/models.js',
        'packages/studio/src/messages/**',
        '**/*.test.*',
        '**/node_modules/**',
      ],
      thresholds: {
        statements: 70,
        branches: 60,
        functions: 70,
        lines: 72,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('.'),
      'studio': path.resolve('./packages/studio/src'),
      'ai-agent': path.resolve('./packages/Open-Poe-AI/packages/agents/src'),
      'workflow-builder': path.resolve('./packages/Vibe-Workflow/packages/workflow-builder/src'),
      'design-agent': path.resolve('./packages/Open-AI-Design-Agent/packages/design-agent/src'),
    },
  },
});
