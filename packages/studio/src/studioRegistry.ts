/**
 * Canonical studio identifiers and English labels shared by the web shell and
 * the Electron SPA. Icons, category grouping, and availability remain
 * entry-point specific; labels/ordering live here to avoid drift.
 */
export interface StudioTab {
  id: string;
  label: string;
}

export const STUDIO_TABS: StudioTab[] = [
  { id: 'image', label: 'Image Studio' },
  { id: 'layers', label: 'Layers Studio' },
  { id: 'video', label: 'Video Studio' },
  { id: 'audio', label: 'Audio Studio' },
  { id: 'clipping', label: 'AI Clipping' },
  { id: 'motion-control', label: 'Motion Control' },
  { id: 'vibe-motion', label: 'Vibe Motion' },
  { id: 'lipsync', label: 'Lip Sync' },
  { id: 'body-swap', label: 'Body Swap' },
  { id: 'cinema', label: 'Cinema Studio' },
  { id: 'marketing', label: 'Marketing Studio' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'agents', label: 'Agents' },
  { id: 'design-agent', label: 'Design Agent' },
  { id: 'apps', label: 'Explore Apps' },
  { id: 'ai-influencer', label: 'AI Influencer Studio' },
  { id: 'mcp-cli', label: 'MCP & CLI' },
];

export const STUDIO_LABELS: Record<string, string> = Object.fromEntries(
  STUDIO_TABS.map((tab) => [tab.id, tab.label])
);
