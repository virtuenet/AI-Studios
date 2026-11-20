import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    // Studio renders and locale merges can exceed Vitest's 5s default on a
    // busy CI/desktop machine; keep enough headroom for real regressions.
    testTimeout: 15000,
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
        'packages/studio/src/utils/errorReporter.ts',
        'packages/studio/src/utils/a11yAudit.ts',
        'packages/studio/src/utils/generationLifecycle.ts',
        'packages/studio/src/utils/formatError.ts',
        'packages/studio/src/utils/downloadImage.ts',
        'packages/studio/src/utils/clientIds.ts',
        'lib/uploadProxyTarget.ts',
        'lib/session.ts',
        'lib/logger.ts',
        'lib/locales.ts',
        'lib/localModels.js',
        'packages/studio/src/hooks/**/*.{js,ts}',
        'packages/studio/src/filmCrew/{qaChecklist,audioQc,castLibrary,sceneSet,mlChecks,promptQa}.ts',
      ],
      exclude: [
        'packages/studio/src/models.js',
        'packages/studio/src/messages/**',
        '**/*.test.*',
        '**/node_modules/**',
      ],
      thresholds: {
        statements: 75,
        branches: 64,
        functions: 78,
        lines: 79,
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
