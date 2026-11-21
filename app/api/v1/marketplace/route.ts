/**
 * Marketplace registry (Phase 3).
 *
 * Lists published app templates and studio extensions. In production,
 * backed by a marketplace database. For development, returns a static
 * catalog that matches the existing Apps Studio content.
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface MarketplaceEntry {
  id: string;
  name: string;
  description: string;
  category: 'studio' | 'workflow' | 'agent' | 'template';
  author: string;
  price: 'free' | 'paid';
  stripePriceId?: string;
  icon?: string;
  tags: string[];
}

const CATALOG: MarketplaceEntry[] = [
  {
    id: 'ugc-ad-generator',
    name: 'UGC Ad Generator',
    description: 'Generate user-generated-content style ads with AI avatars and product placement.',
    category: 'template',
    author: 'AI Studios',
    price: 'free',
    tags: ['marketing', 'video', 'ugc'],
  },
  {
    id: 'brand-kit-studio',
    name: 'Brand Kit Studio',
    description: 'Keep logos, colors, and fonts consistent across all AI-generated assets.',
    category: 'studio',
    author: 'AI Studios',
    price: 'free',
    tags: ['branding', 'design', 'consistency'],
  },
  {
    id: 'ecommerce-photography',
    name: 'E-Commerce Photography',
    description: 'Product photos on white backgrounds with consistent lighting and angles.',
    category: 'workflow',
    author: 'AI Studios',
    price: 'paid',
    stripePriceId: 'price_placeholder',
    tags: ['ecommerce', 'photography', 'product'],
  },
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler',
    description: 'Batch-generate content for a week and schedule posts across platforms.',
    category: 'workflow',
    author: 'AI Studios',
    price: 'paid',
    stripePriceId: 'price_placeholder',
    tags: ['social', 'scheduling', 'batch'],
  },
  {
    id: 'film-crew-qa',
    name: 'Film Crew QA',
    description: 'Blind-review checklists, shot-prompt continuity, and ML product-size checks.',
    category: 'studio',
    author: 'AI Studios',
    price: 'free',
    tags: ['qa', 'film', 'continuity'],
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { entries: CATALOG },
    { headers: { 'Cache-Control': 'public, max-age=300' } },
  );
}
