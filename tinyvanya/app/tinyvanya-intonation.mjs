// Question intonation guard (port of src/tiny_vanya/intonation.py): a yes/no question whose focus syllable does
// not rise after synthesis gets a pitch offset over that syllable and the rest of its word, and is synthesized once
// more. "^" before a word marks the focus the guard checks; a rise is only added where the model has none.
export const SEMITONE = Math.log(2) / 12;
export const MIN_RISE = 3.0;
export const TARGET_RISE = 6.0;
const WH = /^(?:а |и |но |ну |да |так )?(?:кто|кого|кому|кем|ком|что|чего|чему|чем|где|куда|откуда|когда|почему|зачем|отчего|как|какой|какая|какое|какие|каким|какую|каких|какого|какому|сколько|чей|чья|чьё|чьи|каков|который|которая|которое|которые)(?![\p{L}\p{N}_])/u;

export function questionKind(text) {
  const t = text.trim().toLowerCase().replaceAll("^", "").replaceAll("+", "");
  if (!t.replace(/["'»”)]+$/u, "").endsWith("?")) return null;
  return WH.test(t) ? "wh" : /(?<![а-яё])ли(?![а-яё])/u.test(t) ? "li" : "yes_no";
}

export function focusToken(phones) {
  const words = phones.words || [];
  if (!words.length) return null;
  const order = phones.focus !== null && phones.focus !== undefined ? [phones.focus] : words.map((_, i) => words.length - 1 - i);
  for (const w of order) {
    const [start, end] = words[w];
    const stressed = [];
    for (let i = start; i < end; i++) if (phones.stress[i] === 1) stressed.push(i);
    if (stressed.length) return phones.focus !== null && phones.focus !== undefined ? stressed[0] : stressed[stressed.length - 1];
  }
  return null;
}

/** durations: number[N]; prosody: [pitch, voicing][T]. Returns number[N] or null. */
export function correction(phones, durations, prosody) {
  const target = focusToken(phones);
  if (target === null) return null;
  const starts = []; let at = 0;
  for (const d of durations) { starts.push(at); at += d; }
  const voiced = prosody.filter(([, v]) => v > 0.5).map(([p]) => p);
  if (voiced.length < 5) return null;
  const median = [...voiced].sort((a, b) => a - b)[Math.floor(voiced.length / 2)];
  const tokenPitch = (i) => prosody.slice(starts[i], starts[i] + durations[i]).filter(([, v]) => v > 0.5).map(([p]) => p);
  const wordEnd = phones.words.find(([s, e]) => s <= target && target < e)[1];
  const here = [];
  for (let i = target; i < wordEnd; i++) here.push(...tokenPitch(i));
  if (!here.length) return null;
  const rise = (Math.max(...here) - median) / SEMITONE;
  const offset = new Array(phones.ids.length).fill(0);
  let changed = false;
  if (rise < MIN_RISE) {
    for (let i = target; i < wordEnd; i++) offset[i] = (TARGET_RISE - rise) * SEMITONE;
    changed = true;
  }
  return changed ? offset : null;
}

/** run(offset|null) -> Promise<{audio, durations, prosody}> */
export async function guarded(text, phones, run) {
  const first = await run(null);
  if (questionKind(text) !== "yes_no" || !first.prosody) return first;
  const offset = correction(phones, first.durations, first.prosody);
  return offset ? run(offset) : first;
}
