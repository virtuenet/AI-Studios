# Phases 2–4: Blockers and prerequisites

## Phase 2 — Launch readiness

| Feature | Status | Blocker |
|---------|--------|---------|
| Teams, roles, invitations | Not started | Requires Postgres + auth provider (Clerk/Auth.js) |
| Shared project/asset libraries | Not started | Requires S3/R2 + asset schema |
| Usage dashboards | Not started | Requires Postgres + usage_events table |
| Invoices | Not started | Requires Stripe billing integration |
| Rate limits (per-org) | Scaffolded (`lib/rateLimit.ts`) | In-memory only; needs Redis for production |
| Async QC | Scaffolded (`client/jobQueue.ts`) | Needs worker process (BullMQ/Inngest) |
| Webhooks (Muapi, Stripe) | Stripe scaffolded | Needs Stripe account + Muapi webhook support |
| Per-tenant observability | Not started | Needs OpenTelemetry + analytics |
| Tenant-isolation tests | ✅ 5 tests | In-memory stores; needs Postgres test container |
| Onboarding templates | Not started | Product design task |

## Phase 3 — Expansion revenue

| Feature | Status | Blocker |
|---------|--------|---------|
| Public API keys | Schema exists (`api_keys` table) | Needs auth + key management UI |
| SSO/SAML | Not started | Needs auth provider (WorkOS/Clerk Enterprise) |
| Approval workflows | Not started | Product design + Postgres |
| Agency/white-label workspaces | Not started | Multi-tenant schema exists; needs UI |
| Template/app marketplace | Not started | Product design + Stripe Connect |

## Phase 4 — Scale and enterprise

| Feature | Status | Blocker |
|---------|--------|---------|
| Read replicas / PgBouncer | Not started | Needs production Postgres (Neon/RDS) |
| Worker autoscaling | Not started | Needs queue depth metrics + infrastructure |
| Multi-region assets | Not started | Needs S3/R2 + CDN configuration |
| On-prem/private-cloud | Not started | Needs Docker Compose / Kubernetes manifests |
| SOC 2 / DPA | Not started | Needs all of Phase 1–3 complete |
| Provider abstraction (beyond Muapi) | Not started | Needs second provider contract + adapter |

## Minimum viable path to Phase 2

1. Provision Postgres (Neon free tier or local Docker)
2. Run `drizzle-kit migrate` to create tables
3. Install and configure Clerk/Auth.js for auth
4. Create a Stripe account and add keys
5. Deploy a worker (Railway/Render background worker or Inngest)
6. Provision an S3/R2 bucket for assets

After these 6 steps, the existing code (credit ledger, managed BFF, rate limiter,
audit log, Stripe webhook, price book) will work end-to-end with real persistence.
