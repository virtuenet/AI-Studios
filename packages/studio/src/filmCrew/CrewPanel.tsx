"use client";

import { startTransition, useEffect, useState } from 'react';
import {
  applyCastToPrompt,
  collectCastReferences,
  createCastMember,
  loadCast,
  removeCastMember,
  saveCast,
  upsertCastMember,
  type CastMember,
} from './castLibrary';
import {
  EMPTY_SCENE,
  SCENE_FIELDS,
  composeScenePrompt,
  loadSceneSet,
  saveSceneSet,
  type SceneSet,
} from './sceneSet';

export interface CrewApplyResult {
  prompt: string;
  referenceUrls: string[];
  castCount: number;
  sceneFields: number;
}

interface CrewPanelProps {
  open: boolean;
  initialPrompt?: string;
  onApply?: (result: CrewApplyResult) => void;
  onClose?: () => void;
}

interface CastDraft {
  name: string;
  description: string;
  urls: string;
}

const EMPTY_DRAFT: CastDraft = { name: '', description: '', urls: '' };

/**
 * Combined Cast + Scene panel (adapted from ai-film-crew's recurring-cast and
 * scene-set skills). Applies a continuity prompt prefix and cast reference
 * images to the current shot.
 */
export default function CrewPanel({ open, initialPrompt = '', onApply, onClose }: CrewPanelProps) {
  const [tab, setTab] = useState<'cast' | 'scene'>('cast');
  const [cast, setCast] = useState<CastMember[]>([]);
  const [scene, setScene] = useState<SceneSet>(EMPTY_SCENE);
  const [draft, setDraft] = useState<CastDraft>(EMPTY_DRAFT);

  useEffect(() => {
    if (!open) return;
    startTransition(() => {
      setCast(loadCast());
      setScene(loadSceneSet());
    });
  }, [open]);

  const addMember = () => {
    const member = createCastMember({
      name: draft.name,
      description: draft.description,
      referenceUrls: draft.urls.split(/\s+/).filter(Boolean),
    });
    if (!member.name) return;
    const next = upsertCastMember(cast, member);
    setCast(next);
    saveCast(next);
    setDraft(EMPTY_DRAFT);
  };

  const deleteMember = (id: string) => {
    const next = removeCastMember(cast, id);
    setCast(next);
    saveCast(next);
  };

  const apply = () => {
    saveSceneSet(scene);
    saveCast(cast);
    const composed = composeScenePrompt(scene, initialPrompt);
    onApply?.({
      prompt: applyCastToPrompt(composed, cast),
      referenceUrls: collectCastReferences(cast),
      castCount: cast.length,
      sceneFields: Object.values(scene).filter(Boolean).length,
    });
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Crew: cast and scene continuity">
      <div className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0b] p-6 text-white shadow-2xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold">Crew</h2>
            <p className="text-xs text-white/50">Keep the cast and the set identical across shots.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-md px-2 py-1 text-white/50 hover:bg-white/10 hover:text-white">✕</button>
        </div>

        <div className="mb-4 flex gap-2">
          {(['cast', 'scene'] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold capitalize ${tab === id ? 'bg-[#22d3ee]/15 text-[#22d3ee] border border-[#22d3ee]/30' : 'border border-white/10 text-white/60 hover:bg-white/5'}`}
            >
              {id === 'cast' ? 'Cast' : 'Scene & set'}
            </button>
          ))}
        </div>

        {tab === 'cast' ? (
          <div className="space-y-4">
            <div className="grid gap-2 md:grid-cols-2">
              <input value={draft.name} onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))} placeholder="Character name (Ana)" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" />
              <input value={draft.description} onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))} placeholder="Continuity: short dark hair, navy linen shirt" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" />
            </div>
            <textarea value={draft.urls} onChange={(e) => setDraft((d) => ({ ...d, urls: e.target.value }))} placeholder="Reference image URLs (one per line or space-separated)" rows={2} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" />
            <button type="button" onClick={addMember} className="rounded-lg bg-[#22d3ee] px-4 py-2 text-xs font-bold text-black hover:bg-[#e5ff33]">Add character</button>

            <ul className="space-y-2" aria-label="Cast members">
              {cast.map((member) => (
                <li key={member.id} className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs">
                  <div>
                    <span className="font-bold text-white">{member.name}</span>
                    {member.description && <p className="text-white/50">{member.description}</p>}
                    <p className="text-white/30">{member.referenceUrls.length} reference image(s)</p>
                  </div>
                  <button type="button" onClick={() => deleteMember(member.id)} className="text-white/40 hover:text-red-400" aria-label={`Remove ${member.name}`}>✕</button>
                </li>
              ))}
              {cast.length === 0 && <li className="text-xs text-white/40">No cast yet. Add a name and reference images.</li>}
            </ul>
          </div>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {SCENE_FIELDS.map((field) => (
              <label key={field.id} className="block text-xs">
                <span className="mb-1 block font-semibold text-white/70">{field.label}</span>
                <input
                  value={scene[field.id] || ''}
                  onChange={(e) => setScene((prev) => ({ ...prev, [field.id]: e.target.value }))}
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25"
                />
              </label>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between gap-3">
          <p className="text-[11px] text-white/40">Prompt gets a continuity prefix; cast images are added as references.</p>
          <button type="button" onClick={apply} className="rounded-lg bg-[#22d3ee] px-5 py-2 text-xs font-bold text-black hover:bg-[#e5ff33]">Apply to shot</button>
        </div>
      </div>
    </div>
  );
}
