import { useCallback, useEffect, useMemo, useState } from 'react';
// Import studios via their individual package subpaths rather than the barrel
// (studio's index.js also pulls Workflow/Agent/DesignAgent, which drag host-only
// dependencies into the Electron bundle and are available in the web app).
import ImageStudio from 'studio/ImageStudio';
import VideoStudio from 'studio/VideoStudio';
import AudioStudio from 'studio/AudioStudio';
import ClippingStudio from 'studio/ClippingStudio';
import MotionControlStudio from 'studio/MotionControlStudio';
import VibeMotionStudio from 'studio/VibeMotionStudio';
import LipSyncStudio from 'studio/LipSyncStudio';
import RecastStudio from 'studio/RecastStudio';
import CinemaStudio from 'studio/CinemaStudio';
import MarketingStudio from 'studio/MarketingStudio';
import AiInfluencerStudio from 'studio/AiInfluencerStudio';
import LayersStudio from 'studio/LayersStudio';
import AppsStudio from 'studio/AppsStudio';
import McpCliStudio from 'studio/McpCliStudio';
import StudioErrorBoundary from 'studio/components/StudioErrorBoundary';
import { getUserBalance } from 'studio/muapi';

const STORAGE_KEY = 'muapi_key';

const TABS = [
  { id: 'image', label: 'Image' },
  { id: 'video', label: 'Video' },
  { id: 'audio', label: 'Audio' },
  { id: 'lipsync', label: 'Lip Sync' },
  { id: 'clipping', label: 'Clipping' },
  { id: 'motion-control', label: 'Motion' },
  { id: 'vibe-motion', label: 'Vibe' },
  { id: 'body-swap', label: 'Recast' },
  { id: 'cinema', label: 'Cinema' },
  { id: 'layers', label: 'Layers' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'ai-influencer', label: 'Influencer' },
  { id: 'apps', label: 'Apps' },
  { id: 'mcp-cli', label: 'MCP & CLI' },
];

function ApiKeyGate({ onSave }) {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const submit = (event) => {
    event.preventDefault();
    const trimmed = key.trim();
    if (!trimmed) {
      setError('Please enter your API key');
      return;
    }
    onSave(trimmed);
  };

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-[#0a0a0a]/90 border border-white/10 rounded-xl p-10 shadow-2xl"
        role="dialog"
        aria-labelledby="key-title"
      >
        <h1 id="key-title" className="text-xl font-bold text-center mb-2">
          AI Studios
        </h1>
        <p className="text-white/60 text-[13px] text-center mb-8">
          Enter your Muapi API key to start creating
        </p>
        <label htmlFor="api-key" className="block text-xs font-bold text-white/60 mb-2">
          API Access Key
        </label>
        <input
          id="api-key"
          type="password"
          value={key}
          onChange={(event) => {
            setKey(event.target.value);
            setError('');
          }}
          placeholder="Paste your key here..."
          className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[#22d3ee]/50"
          autoFocus
        />
        {error && <p className="mt-2 text-red-400 text-[12px]">{error}</p>}
        <button
          type="submit"
          className="mt-6 w-full bg-[#22d3ee] text-black font-bold py-2.5 rounded-md hover:bg-[#e5ff33] transition-colors"
        >
          Get Started
        </button>
      </form>
    </div>
  );
}

export default function StudioApp() {
  const [apiKey, setApiKey] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  });
  const [activeTab, setActiveTab] = useState('image');
  const [balance, setBalance] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!apiKey) return;
    getUserBalance(apiKey)
      .then((data) => setBalance(data?.balance ?? null))
      .catch(() => setBalance(null));
  }, [apiKey]);

  const saveKey = useCallback((key) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, key);
    } catch {
      // ignore
    }
    setApiKey(key);
  }, []);

  const onGenerationComplete = useCallback(() => setStatus({ type: 'success', at: Date.now() }), []);
  const onGenerationError = useCallback(
    (error) => setStatus({ type: 'error', message: typeof error === 'string' ? error : error?.message || 'Generation failed' }),
    []
  );
  const noop = useCallback(() => {}, []);

  const sharedProps = useMemo(
    () => ({
      apiKey,
      locale: 'en',
      onGenerationStart: noop,
      onGenerationEnd: noop,
      onGenerationComplete,
      onGenerationError,
    }),
    [apiKey, noop, onGenerationComplete, onGenerationError]
  );

  if (!apiKey) return <ApiKeyGate onSave={saveKey} />;

  const renderStudio = () => {
    switch (activeTab) {
      case 'video':
        return <VideoStudio {...sharedProps} />;
      case 'audio':
        return <AudioStudio {...sharedProps} />;
      case 'lipsync':
        return <LipSyncStudio {...sharedProps} />;
      case 'clipping':
        return <ClippingStudio {...sharedProps} />;
      case 'motion-control':
        return <MotionControlStudio {...sharedProps} />;
      case 'vibe-motion':
        return <VibeMotionStudio {...sharedProps} />;
      case 'body-swap':
        return <RecastStudio {...sharedProps} />;
      case 'cinema':
        return <CinemaStudio {...sharedProps} />;
      case 'layers':
        return <LayersStudio {...sharedProps} />;
      case 'marketing':
        return <MarketingStudio {...sharedProps} />;
      case 'ai-influencer':
        return <AiInfluencerStudio {...sharedProps} />;
      case 'apps':
        return <AppsStudio {...sharedProps} />;
      case 'mcp-cli':
        return <McpCliStudio locale="en" />;
      default:
        return <ImageStudio {...sharedProps} />;
    }
  };

  return (
    <div className="h-screen bg-[#030303] flex flex-col overflow-hidden text-white">
      <header className="flex-shrink-0 h-14 border-b border-white/[0.06] flex items-center justify-between px-4 bg-[#0a0a0b]/80 gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#22d3ee] rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-sm font-bold tracking-tight">AI Studios</span>
        </div>

        <nav aria-label="Studio navigation" className="flex-1 min-w-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-current={activeTab === tab.id ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-md text-[12px] font-bold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#22d3ee]/15 text-[#22d3ee] border border-[#22d3ee]/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex-shrink-0 flex items-center gap-3">
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-bold text-white/90">
              ${balance !== null ? balance : '---'}
            </span>
          </span>
          <button
            onClick={() => {
              try {
                window.localStorage.removeItem(STORAGE_KEY);
              } catch {
                // ignore
              }
              setApiKey(null);
            }}
            className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[12px] font-bold text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            Change key
          </button>
        </div>
      </header>

      {status && (
        <div
          role="status"
          className={`px-4 py-1.5 text-[12px] font-semibold ${
            status.type === 'success' ? 'bg-cyan-500/10 text-cyan-300' : 'bg-red-500/10 text-red-300'
          }`}
        >
          {status.type === 'success' ? 'Generation complete' : status.message}
        </div>
      )}

      <main id="studio-content" className="flex-1 min-h-0 overflow-hidden">
        <StudioErrorBoundary studio={activeTab}>
          {renderStudio()}
        </StudioErrorBoundary>
      </main>
    </div>
  );
}
