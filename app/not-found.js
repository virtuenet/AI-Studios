import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4 text-white">
      <div className="text-center">
        <p className="text-[#22d3ee] text-sm font-bold tracking-widest uppercase mb-2">404</p>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-white/60 text-sm mb-6">The page you are looking for does not exist or was moved.</p>
        <Link
          href="/studio/image"
          className="inline-block rounded-xl bg-[#22d3ee] px-6 py-2.5 text-sm font-bold text-black hover:bg-[#e5ff33]"
        >
          Back to the studio
        </Link>
      </div>
    </div>
  );
}
