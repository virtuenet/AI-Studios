"use client";

import { useMemo, useState } from 'react';
import { gradeChecklist, questionsFor } from './qaChecklist';
import { lintShotPrompt } from './promptQa';
import { getMlEndpoint, runMlChecks } from './mlChecks';

/**
 * Blind-review panel adapted from ai-film-crew's "test audience": fixed-answer
 * questions, code decides PASS/FAIL, and a pre-flight shot-prompt audit.
 */
export default function ReviewChecklistModal({ open, type = 'image', prompt = '', imageUrl, onClose }) {
  const questions = useMemo(() => questionsFor(type), [type]);
  const [answers, setAnswers] = useState({});
  const [ml, setMl] = useState(null);
  const [mlBusy, setMlBusy] = useState(false);
  const mlEnabled = Boolean(getMlEndpoint());
  const grade = useMemo(() => gradeChecklist(type, answers), [type, answers]);
  const promptAudit = useMemo(
    () => (prompt ? lintShotPrompt(prompt) : null),
    [prompt]
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Crew review checklist">
      <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0b] p-6 text-white shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold">Crew check</h2>
            <p className="text-xs text-white/50">Fixed-answer review: one wrong answer sends the take back.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-md px-2 py-1 text-white/50 hover:bg-white/10 hover:text-white">✕</button>
        </div>

        {promptAudit && (
          <div className={`mb-4 rounded-xl border p-3 text-xs ${promptAudit.passed ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-200' : 'border-amber-500/30 bg-amber-500/5 text-amber-200'}`}>
            <div className="font-bold">Prompt pre-flight · {promptAudit.score}%</div>
            {promptAudit.hints.length > 0 && (
              <ul className="mt-1 list-disc space-y-0.5 pl-4 text-white/60">
                {promptAudit.hints.map((hint) => <li key={hint}>{hint}</li>)}
              </ul>
            )}
          </div>
        )}

        {mlEnabled && imageUrl && (
          <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-white/80">ML checks</span>
              <button
                type="button"
                disabled={mlBusy}
                onClick={async () => {
                  setMlBusy(true);
                  setMl(await runMlChecks({ imageUrl, prompt }));
                  setMlBusy(false);
                }}
                className="rounded-md border border-white/15 px-2 py-1 font-bold text-white/70 hover:bg-white/10 disabled:opacity-50"
              >
                {mlBusy ? 'Running…' : 'Run'}
              </button>
            </div>
            {ml && (
              <ul className="mt-2 space-y-1">
                {ml.ok && ml.checks.length === 0 && <li className="text-white/50">Service returned no checks.</li>}
                {ml.checks.map((check) => (
                  <li key={check.id || check.name} className={check.pass ? 'text-emerald-300' : 'text-red-300'}>
                    {check.pass ? 'PASS' : 'FAIL'} · {check.name || check.id}{check.detail ? ` — ${check.detail}` : ''}
                  </li>
                ))}
                {!ml.ok && <li className="text-red-300">{ml.error || 'ML QC failed'}</li>}
              </ul>
            )}
          </div>
        )}

        <div className="space-y-3">
          {questions.map((question) => (
            <label key={question.id} className="block text-xs">
              <span className="mb-1 block font-semibold text-white/80">{question.question}</span>
              <select
                value={answers[question.id] ?? ''}
                onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#22d3ee]/50"
              >
                <option value="" className="bg-[#0a0a0b]">— answer —</option>
                {question.options.map((option) => (
                  <option key={option} value={option} className="bg-[#0a0a0b]">{option}</option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <div className={`mt-5 rounded-xl border p-3 text-sm font-bold ${grade.passed ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-red-500/40 bg-red-500/10 text-red-300'}`} role="status">
          {grade.passed ? 'PASS — ready for a human' : `FAIL — ${grade.failedIds.length} issue(s): ${grade.failedIds.join(', ')}`}
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={() => setAnswers({})} className="rounded-lg border border-white/10 px-4 py-2 text-xs font-bold text-white/70 hover:bg-white/10">Reset</button>
          <button type="button" onClick={onClose} className="rounded-lg bg-[#22d3ee] px-4 py-2 text-xs font-bold text-black hover:bg-[#e5ff33]">Done</button>
        </div>
      </div>
    </div>
  );
}
