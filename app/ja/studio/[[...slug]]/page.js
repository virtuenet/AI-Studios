import StandaloneShell from '@/app/shell/StandaloneShell';

export const metadata = {
  title: 'Studio — AI Studios',
};

// Additive locale route wrapper: reuses the shared shell with locale='ja'.
export default function JAStudioPage() {
  return <StandaloneShell locale="ja" />;
}
