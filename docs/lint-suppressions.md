# ESLint Suppressions & React Compiler Migration

The React Compiler rules (`react-hooks/set-state-in-effect`, `refs`, `purity`,
`immutability`, `preserve-manual-memoization`) and `react-hooks/exhaustive-deps`
are **errors** in `eslint.config.mjs`. CI runs `eslint . --max-warnings 0`, so any
**new** violation fails the build.

## Baseline file

`eslint-suppressions.json` (ESLint bulk suppressions) records the reviewed
legacy baseline in the large studio components. It is a migration ledger, not a
blanket disable:

```bash
npm run lint             # zero problems (baseline suppressed)
npm run lint:prune       # remove stale entries after fixing violations
npx eslint . --suppress-all   # re-baseline after intentional, reviewed changes
```

Rules:

1. Do **not** run `--suppress-all` to hide new violations; fix them.
2. When you fix legacy violations, run `npm run lint:prune` and commit the
   smaller ledger.
3. Prefer the shared hooks (`useGeneration`, `usePersistentObject`) and
   `useSyncExternalStore` patterns over setState-in-effect.
4. The studio package opts out of `@next/next/no-img-element` because the same
   components run under Vite/Electron, where `next/image` does not exist. Images
   use `loading="lazy" decoding="async"`.

Already fixed outside the baseline: shell effects (client flag via
`useSyncExternalStore`, external balance store, derived header visibility),
ThemeToggle initialization, render-time ref writes in Image/Video/Draw, and all
unescaped-entity / img-alt warnings.
