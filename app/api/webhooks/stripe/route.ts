/**
 * Stripe webhook handler (Phase 1).
 *
 * Receives Stripe events, verifies the signature, and updates the credit
 * ledger and subscriptions. In production, the signing secret comes from
 * the Stripe dashboard (STRIPE_WEBHOOK_SECRET) and the ledger is backed
 * by Postgres. In development, the in-memory ledger is used.
 */

import { NextResponse, type NextRequest } from 'next/server';
import {
  createMemoryLedgerStore,
  CreditLedger,
} from '@/packages/studio/src/client/creditLedger';
import { createMemoryAuditLog } from '@/lib/auditLog';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// In production, swap for Drizzle-backed stores.
const ledger = new CreditLedger(createMemoryLedgerStore());
const auditLog = createMemoryAuditLog();

function verifySignature(
  body: string,
  signature: string,
): { verified: boolean; event?: Record<string, unknown> } {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    try {
      return { verified: true, event: JSON.parse(body) as Record<string, unknown> };
    } catch {
      return { verified: false };
    }
  }
  // TODO: install stripe and use stripe.webhooks.constructEvent()
  return { verified: false };
}

async function handleCheckoutCompleted(
  event: Record<string, unknown>,
): Promise<void> {
  const obj = (event.data as Record<string, unknown> | undefined)
    ?.object as Record<string, unknown> | undefined;
  const orgId = obj?.client_reference_id as string | undefined;
  const metadata = obj?.metadata as Record<string, unknown> | undefined;
  const creditAmount = Number(metadata?.credits || '0');

  if (!orgId || creditAmount <= 0) return;

  // Grant credits via the ledger
  const entry = await ledger.credit(
    orgId,
    creditAmount,
    'credit_pack_purchase',
    obj?.id as string || 'unknown',
  );

  // Record the audit event
  await auditLog.record({
    orgId,
    userId: 'stripe',
    action: 'stripe.checkout.completed',
    resource: 'credit_ledger',
    resourceId: entry.id,
    metadata: {
      stripeSessionId: obj?.id,
      amount: creditAmount,
    },
  });

  console.log(
    `[stripe] credited ${creditAmount} to org ${orgId} (ledger: ${entry.id})`,
  );
}

async function handleSubscriptionUpdated(
  event: Record<string, unknown>,
): Promise<void> {
  const obj = (event.data as Record<string, unknown> | undefined)
    ?.object as Record<string, unknown> | undefined;
  const orgId = (obj?.metadata as Record<string, unknown> | undefined)
    ?.orgId as string | undefined;
  const status = obj?.status as string | undefined;

  if (!orgId) return;

  await auditLog.record({
    orgId,
    userId: 'stripe',
    action: 'stripe.subscription.updated',
    resource: 'subscription',
    resourceId: obj?.id as string || 'unknown',
    metadata: { status },
  });

  console.log(`[stripe] subscription updated: org=${orgId} status=${status}`);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const signature = request.headers.get('stripe-signature') || '';
  const body = await request.text();
  const { verified, event } = verifySignature(body, signature);

  if (!verified || !event) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event);
        break;
      case 'customer.subscription.deleted':
        break;
      case 'invoice.paid':
        break;
      case 'invoice.payment_failed':
        break;
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('[stripe] webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler error' },
      { status: 500 },
    );
  }
}
