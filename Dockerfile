# syntax=docker/dockerfile:1.7

# ─────────────────────────────────────────────────────────────
# AI Studios — multi-stage production image
# ─────────────────────────────────────────────────────────────

FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# ── Dependencies ─────────────────────────────────────────────
FROM base AS deps
COPY package*.json ./
COPY . .
# The app builds from git submodules; fail early with a clear message if missing.
RUN for d in packages/Vibe-Workflow/packages/workflow-builder packages/Open-Poe-AI/packages/agents packages/Open-AI-Design-Agent/packages/design-agent; do \
      [ -f "$d/package.json" ] || { echo "ERROR: $d is missing. Submodules are not initialized. Run: git submodule update --init --recursive (or clone with --recurse-submodules), then rebuild." >&2; exit 1; }; \
    done
# Use `npm ci` when a lockfile is present for reproducible installs.
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# ── Build ────────────────────────────────────────────────────
FROM deps AS builder
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build:packages
RUN npm run build

# Prune dev dependencies from the production node_modules
RUN npm prune --omit=dev

# ── Runtime ──────────────────────────────────────────────────
FROM base AS runner
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Run as an unprivileged user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
# Workspace packages resolved at runtime (transpilePackages)
COPY --from=builder --chown=nextjs:nodejs /app/packages ./packages

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/studio/image >/dev/null 2>&1 || exit 1

CMD ["npm", "start"]
