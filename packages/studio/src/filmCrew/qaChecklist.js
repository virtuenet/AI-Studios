/**
 * Blind-review checklist, adapted from ai-film-crew's "test audience" skill.
 *
 * The agent that made a still will say it looks great, so review uses factual
 * questions with fixed answers and lets code decide PASS/FAIL. "can't tell"
 * always fails: an unverifiable frame is not shippable.
 */
export const CHECK_BANK = {
  image: [
    { id: 'fingers', question: 'How many fingers are visible on each hand?', options: ['five', 'four', 'six', 'can\'t tell'], pass: 'five' },
    { id: 'limbs', question: 'Are there exactly two arms and two legs per person?', options: ['yes', 'extra limb', 'missing limb', 'can\'t tell'], pass: 'yes' },
    { id: 'text', question: 'Is any in-image text or logo legible and correctly spelled?', options: ['yes / none', 'garbled', 'misspelled', 'can\'t tell'], pass: 'yes / none' },
    { id: 'productScale', question: 'Does the product look the right size in the hand?', options: ['yes', 'too big', 'too small', 'can\'t tell'], pass: 'yes' },
    { id: 'face', question: 'Does the face match the approved cast reference?', options: ['yes', 'drifted', 'different person', 'can\'t tell'], pass: 'yes' },
    { id: 'set', question: 'Are seats, props and light direction consistent with the set?', options: ['yes', 'swapped', 'moved', 'can\'t tell'], pass: 'yes' },
  ],
  video: [
    { id: 'fingers', question: 'How many fingers are visible on each hand?', options: ['five', 'four', 'six', 'can\'t tell'], pass: 'five' },
    { id: 'face', question: 'Does the face stay the same person across the cut?', options: ['yes', 'drifted', 'different person', 'can\'t tell'], pass: 'yes' },
    { id: 'motion', question: 'Do limbs and props move without warping or duplication?', options: ['yes', 'warping', 'duplication', 'can\'t tell'], pass: 'yes' },
    { id: 'text', question: 'Is any on-screen text legible and correctly spelled?', options: ['yes / none', 'garbled', 'misspelled', 'can\'t tell'], pass: 'yes / none' },
    { id: 'continuity', question: 'Do wardrobe, props and set stay consistent between shots?', options: ['yes', 'changed', 'can\'t tell'], pass: 'yes' },
  ],
  audio: [
    { id: 'clipping', question: 'Does the waveform clip or crackle at peaks?', options: ['no', 'yes', 'can\'t tell'], pass: 'no' },
    { id: 'hum', question: 'Is there a steady hum or fan noise under the voice?', options: ['no', 'yes', 'can\'t tell'], pass: 'no' },
    { id: 'clicks', question: 'Are there clicks at cuts or between words?', options: ['no', 'yes', 'can\'t tell'], pass: 'no' },
    { id: 'intelligibility', question: 'Are consonants (s/sh) clear and not dull?', options: ['yes', 'dull', 'can\'t tell'], pass: 'yes' },
  ],
};

export function questionsFor(type) {
  return CHECK_BANK[type] || CHECK_BANK.image;
}

/**
 * Grade answers against the accepted ones. Any wrong or "can't tell" answer
 * fails the piece before a human sees it.
 */
export function gradeChecklist(type, answers = {}) {
  const results = questionsFor(type).map((check) => {
    const answer = answers[check.id];
    return {
      id: check.id,
      question: check.question,
      answer: answer ?? null,
      expected: check.pass,
      pass: answer === check.pass,
    };
  });
  const failed = results.filter((r) => !r.pass);
  return {
    passed: failed.length === 0,
    total: results.length,
    answered: results.filter((r) => r.answer != null).length,
    failedIds: failed.map((r) => r.id),
    results,
  };
}
