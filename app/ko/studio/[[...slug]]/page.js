import StandaloneShell from '@/components/StandaloneShell';

export const metadata = {
  title: 'Studio — AI Studios',
};

// Additive locale route wrapper: reuses the shared shell with locale='ko'.
export default function KOStudioPage() {
  return <StandaloneShell locale="ko" />;
}
