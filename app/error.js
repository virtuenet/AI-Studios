'use client';

import { useEffect } from 'react';

export default function GlobalRouteError({ error, reset }) {
  useEffect(() => {
    console.error('[app/error]', error?.message || error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-[#0a0a0b] p-8 text-center">
        <h1 className="text-xl font-bold mb-2">Something went wrong</h1>
        <p className="text-sm text-white/60 mb-6">
          {error?.message || 'An unexpected error occurred while rendering this page.'}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-xl bg-[#22d3ee] px-6 py-2.5 text-sm font-bold text-black hover:bg-[#e5ff33]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
