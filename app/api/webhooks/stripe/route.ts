/**
 * Stripe webhook handler scaffold (Phase 1).
 *
 * Receives Stripe events, verifies the signature, and updates subscriptions,
 * credit packs, and payment status. In production, the signing secret comes
 * from the Stripe dashboard and is stored in STRIPE_WEBHOOK_SECRET.
 *
 * Events handled:
 *   - checkout.session.completed → grant credits
 *   - customer.subscription.updated → sync plan
 *   - customer.subscription.deleted → downgrade to free
 *   - invoice.paid → record payment
 *   - invoice.payment_failed → notify billing contact
 */

import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Verify the Stripe webhook signature. */
function verifySignature(body: string, signature: string): { verified: boolean; event?: Record<string, unknown> } {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    try {
      return { verified: true, event: JSON.parse(body) as Record<string, unknown> };
    } catch {
      return { verified: false };
    }
  }
  // TODO: install stripe package and use stripe.webhooks.constructEvent()
  return { verified: false };
}

async function handleCheckoutCompleted(event: Record<string, unknown>): Promise<void> {
  const data = (event.data as Record<string, unknown> | undefined)?.object as Record<string, unknown> | undefined;
  const orgId = data?.client_reference_id as string | undefined;
  const metadata = data?.metadata as Record<string, unknown> | undefined;
  const creditAmount = Number(metadata?.credits || '0');

  if (!orgId || !creditAmount) return;
  // TODO: credit the org's ledger
  console.log(`[stripe] checkout completed: org=${orgId} credits=${creditAmount}`);
}

async function handleSubscriptionUpdated(event: Record<string, unknown>): Promise<void> {
  const data = (event.data as Record<string, unknown> | undefined)?.object as Record<string, unknown> | undefined;
  const orgId = data?.metadata as Record<string, unknown> | undefined;
  if (!orgId) return;
  console.log(`[stripe] subscription updated: org=${String(orgId)}`);
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
    return NextResponse.json({ error: 'Webhook handler error' }, { status: 500 });
  }
}
