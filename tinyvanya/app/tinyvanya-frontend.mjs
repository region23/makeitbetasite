// Tiny Vanya Russian front end for the browser: a line-for-line port of the "espeak-ru-dialogs-v2" path of
// src/tiny_vanya/text.py (phonemize without accent_text) and src/tiny_vanya/segments.py, on top of
// eSpeak NG 1.52.0 compiled to WebAssembly (web/espeak/tv-espeak.mjs) and called the way phonemizer's
// EspeakBackend calls it. tests/web/parity.mjs checks it against Python token for token.

const SEPARATOR = "_";
const PAD = "<pad>", BOS = "<bos>", EOS = "<eos>", SP = "<sp>", UNK = "<unk>";
const PUNCTUATION = [",", ".", "?", "!", ";", ":", '"', "'", "(", ")", "—", "…"];
const CONSONANTS = ("p b t d k ɡ f v s z ʃ ʒ x m n r l ɭ j ts tʃ dʒ ɕ " +
  "pʲ bʲ tʲ dʲ kʲ ɡʲ fʲ vʲ sʲ nʲ mʲ rʲ ɭʲ xʲ tʃʲ dʒʲ tsʲ ʒʲ ʂ ʐ tɕ ʑ h θ ð ŋ ɹ w").split(" ");
const VOWELS = ['u"', "ɪ^", ..."a ɑ ɐ ə ɛ e i ɪ y ɨ o ɔ ɵ u ʊ ʌ ja ju æ iː uː eɪ aɪ ɔɪ aʊ oʊ əʊ ɑː ɜː ɚ".split(" ")];
const PHONES = [...CONSONANTS, ...VOWELS];
export const SYMBOLS = [PAD, BOS, EOS, SP, UNK, ...PUNCTUATION, ...PHONES];
const SYMBOL_TO_ID = new Map(SYMBOLS.map((s, i) => [s, i]));
const PHONE_SET = new Set(PHONES);
const VOWEL_SET = new Set(VOWELS);
const FALLBACK = {
  "g": ["ɡ"], "lʲ": ["ɭʲ"], "zʲ": ["z"], "ɫ": ["ɭ"], "ɕː": ["ɕ"],
  "t͡s": ["ts"], "t͡ʃ": ["tʃ"], "t͡ɕ": ["tɕ"], "d͡ʒ": ["dʒ"],
  "jɑ": ["ja"], "je": ["j", "e"], "jɛ": ["j", "ɛ"], "jɪ": ["j", "ɪ"],
  "ji": ["j", "i"], "jo": ["j", "o"], "jɵ": ["j", "ɵ"], "jʊ": ["j", "ʊ"],
  "oː": ["o"], "ɔː": ["ɔ"], "aː": ["ɑː"], "eː": ["e"], "ᵻ": ["ɪ"],
};
const QUOTES = { "«": '"', "»": '"', "„": '"', "“": '"', "”": '"', "’": "'", "–": "—", "―": "—", "[": "(", "]": ")", "{": "(", "}": ")" };
const PUNCT_SET = new Set(PUNCTUATION);
const STRESS = { "ˈ": 1, "ˌ": 2 };
const RU_VOWELS = "аеёиоуыэюя";
const isRuVowel = (c) => RU_VOWELS.includes(c);
const MARKED_VOWEL = /\+(?=[аеёиоуыэюя])/giu;
const ACUTE = /([аеёиоуыэюя])́/giu;
const V2_WORD = () => /(?:\+?[а-яёa-z](?:́)?)+(?:-(?:\+?[а-яёa-z](?:́)?)+)*|[0-9]+/giu;
const V2_SUFFIXES = new Set(["то", "нибудь", "либо"]);
const DASH_CONJUNCTIONS = new Set(["а", "и", "но", "да", "или", "же"]);
// phonemizer.punctuation default marks, removed before eSpeak sees a line
const PHONEMIZER_MARKS = /(\s*[;:,.!?¡¿—…"«»“”(){}\[\]]+\s*)+/gu;
const CF = /\p{Cf}/u;

// Phones of English and other foreign words that never occur in the training corpus -> nearest learned phones
// (text.py _SPEAKABLE); the stress stays on the first vowel of the replacement.
const SPEAKABLE = {
  "eɪ": ["ɛ", "j"], "aɪ": ["a", "j"], "ɔɪ": ["o", "j"], "aʊ": ["a", "u"], "oʊ": ["o", "u"], "əʊ": ["o", "u"],
  "iː": ["i"], "uː": ["u"], "ɑː": ["ɑ"], "ɜː": ["ɵ"], "ɚ": ["ʌ", "r"], "æ": ["ɛ"], "ʊ": ["u"],
  "ɔ": ["o"], "ɐ": ["ʌ"], "ɨ": ["y"], "l": ["ɭ"], "tʃ": ["tʃʲ"], "dʒ": ["d", "ʒ"], "dʒʲ": ["d", "ʒ"],
  "xʲ": ["x"], "tsʲ": ["ts"], "ʒʲ": ["ʒ"], "ʂ": ["ʃ"], "ʐ": ["ʒ"], "tɕ": ["tʃʲ"], "h": ["x"],
  "θ": ["s"], "ð": ["z"], "ŋ": ["n", "ɡ"], "ɹ": ["r"], "w": ["v"],
};
function speakable(mapped, carrier) {
  const out = []; let at = 0;
  mapped.forEach((phone, i) => {
    const rep = SPEAKABLE[phone] || [phone];
    if (i === carrier) { const k = rep.findIndex((p) => VOWEL_SET.has(p)); at = out.length + (k < 0 ? 0 : k); }
    out.push(...rep);
  });
  return [out, at];
}

// Currency signs before or after an amount (text.py _v2_spoken_currency): "$906 тысяч" -> "906 тысяч долларов".
const CURRENCY = { "$": ["доллар", "доллара", "долларов"], "€": ["евро", "евро", "евро"], "£": ["фунт", "фунта", "фунтов"], "₽": ["рубль", "рубля", "рублей"] };
const MULTIPLIER = { "тыс": ["тысяча", "тысячи", "тысяч"], "млн": ["миллион", "миллиона", "миллионов"], "млрд": ["миллиард", "миллиарда", "миллиардов"] };
const AMOUNT = String.raw`(\d+(?:[  ]\d{3})*(?:[.,]\d+)?)`;
const SCALE = String.raw`(?:\s+(тыс\.?|тысяч[аи]?|млн\.?|миллион(?:а|ов)?|млрд\.?|миллиард(?:а|ов)?))?`;
const CURRENCY_BEFORE = new RegExp(String.raw`([$€£₽])\s?` + AMOUNT + SCALE + String.raw`(?![\p{L}\p{N}_])`, "gu");
const CURRENCY_AFTER = new RegExp(AMOUNT + SCALE + String.raw`\s?([$€£₽])`, "gu");
function plural(number, forms) {
  if (/[.,]/u.test(number)) return forms[1];
  const n = Number(number.replace(/\D/gu, "") || 0);
  if (n % 10 === 1 && n % 100 !== 11) return forms[0];
  if (n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14)) return forms[1];
  return forms[2];
}
function spokenAmount(number, scale, sign) {
  number = number.replace(/[  ]/gu, "");
  const words = [number];
  if (scale) {
    const key = scale.replace(/\.+$/u, "").toLowerCase();
    const forms = MULTIPLIER[key] || MULTIPLIER[["тыс", "млн", "млрд"].find((k) => MULTIPLIER[k][2].startsWith(key.slice(0, 4)))];
    words.push(plural(number, forms), CURRENCY[sign][2]);
  } else words.push(plural(number, CURRENCY[sign]));
  return words.join(" ");
}
export function spokenCurrency(text) {
  text = text.replace(CURRENCY_BEFORE, (_, sign, number, scale) => spokenAmount(number, scale, sign));
  return text.replace(CURRENCY_AFTER, (_, number, scale, sign) => spokenAmount(number, scale, sign));
}

export class NothingToPronounce extends Error {}
export class UnsupportedAccent extends Error {}

export function normalizeText(text) {
  text = text.normalize("NFC").replace(/[«»„“”’–―\[\]{}]/gu, (c) => QUOTES[c]);
  text = text.replace(/\.{3,}/gu, "…");
  text = text.replace(/-{2,}|\s-\s/gu, " — ");
  return text.replace(/\s+/gu, " ").trim();
}

const isDigit = (c) => /^\p{Nd}$/u.test(c);
const isAlpha = (c) => /^\p{L}$/u.test(c);

export function* chunks(text) {
  let start = 0;
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (!PUNCT_SET.has(char)) continue;
    const before = i ? chars[i - 1] : "", after = i + 1 < chars.length ? chars[i + 1] : "";
    if (".,:".includes(char) && isDigit(before) && isDigit(after)) continue;
    if (char === "'" && isAlpha(before) && isAlpha(after)) continue;
    const piece = chars.slice(start, i).join("").trim();
    if (piece) yield [false, piece];
    yield [true, char];
    start = i + 1;
  }
  const rest = chars.slice(start).join("").trim();
  if (rest) yield [false, rest];
}

function* wordPhones(rawWord) {
  for (const unit of rawWord.split(SEPARATOR)) {
    let level = 0;
    for (const c of unit) if (c in STRESS) { level = STRESS[c]; break; }
    const phone = [...unit].filter((c) => !(c in STRESS) && !CF.test(c)).join("");
    if (!phone) continue;
    const mapped = PHONE_SET.has(phone) ? [phone] : FALLBACK[phone] || null;
    let carrier = 0;
    if (mapped) { const k = mapped.findIndex((p) => VOWEL_SET.has(p)); carrier = k < 0 ? 0 : k; }
    yield [phone, mapped, carrier, level];
  }
}

function wordStress(rawWord) {
  const vowels = [];
  for (const [, mapped, carrier, level] of wordPhones(rawWord))
    (mapped || []).forEach((p, i) => { if (VOWEL_SET.has(p)) vowels.push(i === carrier ? level : 0); });
  const k = vowels.findIndex((s) => s === 1);
  return [vowels.length, k < 0 ? null : String(k + 1)];
}

const countVowels = (s) => [...s].filter(isRuVowel).length;

function v2Parse(word) {
  const spelling = [], marks = [];
  let vowelIndex = 0, before = false;
  for (const char of word.toLowerCase()) {
    if (char === "+") {
      if (before) throw new UnsupportedAccent(`повторный знак ударения: ${word}`);
      before = true;
    } else if (char === "́") {
      if (before || !spelling.length || !isRuVowel(spelling[spelling.length - 1]))
        throw new UnsupportedAccent(`ударение стоит не над гласной: ${word}`);
      marks.push(vowelIndex);
    } else {
      if (before && !isRuVowel(char)) throw new UnsupportedAccent(`знак + стоит не перед гласной: ${word}`);
      spelling.push(char);
      if (isRuVowel(char)) { vowelIndex += 1; if (before) marks.push(vowelIndex); }
      before = false;
    }
  }
  if (before || new Set(marks).size !== marks.length) throw new UnsupportedAccent(`неверная разметка ударения: ${word}`);
  return [spelling.join(""), marks];
}

const removeStress = (raw) => raw.replace(/[ˈˌ]/gu, "");

function v2WordStress(raw, expected) {
  let vowels = [];
  for (const [, mapped, carrier, level] of wordPhones(raw))
    (mapped || []).forEach((p, i) => { if (VOWEL_SET.has(p)) vowels.push([p, i === carrier ? level : 0]); });
  const withoutSoftSign = vowels.filter(([p]) => p !== "ɪ^");
  if (vowels.length !== expected && withoutSoftSign.length === expected) vowels = withoutSoftSign;
  const k = vowels.findIndex(([, l]) => l === 1);
  return [vowels.length, k < 0 ? null : String(k + 1)];
}

function v2Pronunciation(spelling, marks, raw, table, requireStress = false) {
  if (marks.length > 1) throw new UnsupportedAccent(`несколько основных ударений: ${spelling}`);
  let desired = marks.length ? String(marks[0]) : (table.defaults[spelling] ?? null);
  if (desired === null && !requireStress) return raw;
  const expected = countVowels(spelling);
  const [vowels, current] = v2WordStress(raw, expected);
  if (desired === null && expected === 1) desired = "1";
  if (desired === null) {
    if (current !== null) return raw;
    throw new UnsupportedAccent(`не удалось определить ударение основы ${spelling}`);
  }
  if (vowels === expected && current === desired) return raw;
  const variant = (table.variants[spelling] || {})[desired];
  if (variant !== undefined && !variant.includes(" ") && wordStress(variant)[1] === desired) return variant;
  if (vowels === expected && expected === 1 && desired === "1") {
    const units = removeStress(raw).split(SEPARATOR);
    for (let i = 0; i < units.length; i++) {
      const first = wordPhones(units[i]).next().value;
      if (first && (first[1] || []).some((p) => VOWEL_SET.has(p))) { units[i] = "ˈ" + units[i]; return units.join(SEPARATOR); }
    }
  }
  if (marks.length || requireStress) throw new UnsupportedAccent(`нет проверенного произношения ${spelling} с ударением на гласной ${desired}`);
  return raw;
}

function v2Compound(word, raw, table, rawFor) {
  const parts = word.split("-");
  const parsed = parts.map(v2Parse);
  const spellings = parsed.map((p) => p[0]);
  if (parts.length === 2 && spellings[0] === "из" && spellings[1] === "за") {
    if (parsed.some(([, m]) => m.length)) throw new UnsupportedAccent("явное ударение на предлоге 'из-за' не поддерживается");
    return removeStress(raw);
  }
  const suffix = parts.length > 1 && V2_SUFFIXES.has(spellings[spellings.length - 1]) ? spellings[spellings.length - 1] : null;
  const prefix = parts.length > 1 && spellings[0] === "кое";
  if (!suffix && !prefix) { const [s, m] = v2Parse(word); return v2Pronunciation(s, m, raw, table); }
  const start = prefix ? 1 : 0, end = parts.length - (suffix ? 1 : 0);
  if (end - start !== 1) throw new UnsupportedAccent(`неподдерживаемое дефисное слово: ${word}`);
  const [base, baseMarks] = parsed[start];
  if (prefix && parsed[0][1].length) throw new UnsupportedAccent(`основное ударение на приставке кое- не поддерживается: ${word}`);
  if (suffix && parsed[parsed.length - 1][1].length) throw new UnsupportedAccent(`ударение на частице -${suffix} не поддерживается: ${word}`);
  const expected = countVowels(spellings.join(""));
  let vowels = [];
  for (const [, mapped, carrier, level] of wordPhones(raw))
    (mapped || []).forEach((p, i) => { if (VOWEL_SET.has(p)) vowels.push([p, i === carrier ? level : 0]); });
  if (vowels.length !== expected) { const f = vowels.filter(([p]) => p !== "ɪ^"); if (f.length === expected) vowels = f; }
  const prefixCount = prefix ? countVowels(spellings[0]) : 0, baseCount = countVowels(base);
  const primary = []; vowels.forEach(([, l], i) => { if (l === 1) primary.push(i + 1); });
  if (vowels.length === expected && primary.length === 1 && prefixCount < primary[0] && primary[0] <= prefixCount + baseCount)
    if (!baseMarks.length || primary[0] - prefixCount === baseMarks[0]) return raw;
  const main = v2Pronunciation(base, baseMarks, rawFor(base), table, true);
  const result = [];
  if (prefix) result.push(removeStress(rawFor("кое")));
  result.push(main);
  if (suffix) result.push(suffix === "то" ? "t_ʌ" : removeStress(rawFor(suffix)));
  return result.join(SEPARATOR);
}

export class Frontend {
  /** espeak: the module from tv-espeak.mjs; pronunciations: the "pronunciations" object of the model JSON;
   *  homographs: homograph_defaults.json ({word: {default}}). */
  constructor(espeak, pronunciations, homographs) {
    this.espeak = espeak;
    this.table = pronunciations;
    this.homographs = Object.fromEntries(Object.entries(homographs).map(([w, v]) => [w, v.default]));
    if (espeak.ccall("tv_init", "number", ["string", "string"], ["/espeak-ng-data", "ru"]) !== 0) throw new Error("eSpeak NG did not start");
    this.version = espeak.ccall("tv_version", "string", [], []);
  }

  /** phonemizer EspeakBackend.phonemize([line], Separator(phone="_", word=" "), strip=True) for one line. */
  espeakLine(line) {
    line = line.replace(PHONEMIZER_MARKS, " ").trim();
    let out = this.espeak.ccall("tv_phonemize", "string", ["string"], [line]);
    out = out.trim().replaceAll("\n", " ").replaceAll("  ", " ");
    out = out.replace(/_+/gu, "_").replace(/_ /gu, " ");
    if (/\(.+?\)/u.test(out)) out = out.replace(/\(.+?\)/gu, "");
    if (!out) return "";
    return out.split(" ").map((w) => w.trim()).join(" ");
  }

  known(spelling) { return spelling in this.table.defaults || spelling in this.table.variants; }

  inferenceHints(text) {
    return text.replace(V2_WORD(), (word, index) => {
      if (word.includes("+") || word.includes("́") || word.includes("-")) return word;
      let spelling = word.toLowerCase();
      if (spelling === "всем" && /(?<![\p{L}\p{N}_-])(?:о|обо) \^?$/iu.test(text.slice(0, index))) {
        return word.slice(0, 2) + (word[2] === "Е" ? "Ё" : "ё") + word.slice(3);
      }
      if (spelling.includes("е") && !this.known(spelling)) {
        for (let i = 0; i < spelling.length; i++) {
          if (spelling[i] === "е" && this.known(spelling.slice(0, i) + "ё" + spelling.slice(i + 1))) {
            word = word.slice(0, i) + (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase() ? "Ё" : "ё") + word.slice(i + 1);
            spelling = word.toLowerCase();
            break;
          }
        }
      }
      const vowel = this.homographs[spelling];
      if (vowel === undefined || spelling.includes("ё") || spelling in this.table.defaults) return word;
      let count = 0;
      for (let i = 0; i < spelling.length; i++) {
        if (isRuVowel(spelling[i]) && String(++count) === vowel) return word.slice(0, i) + "+" + word.slice(i);
      }
      return word;
    });
  }

  /** Text -> {symbols, ids, stress, unknown}, as tiny_vanya.text.phonemize(text) with the v2 front end. */
  phonemize(text) {
    if (typeof text !== "string" || !/[а-яА-ЯёЁa-zA-Z0-9]/u.test(text)) throw new NothingToPronounce("в тексте нет букв или цифр для произношения");
    const table = this.table;
    text = normalizeText(text);
    let marked = this.inferenceHints(spokenCurrency(text));
    let focus = null;
    if (marked.includes("^")) {
      // text.py: "^" before a word marks the focus of a question (intonation); it is no sound of its own.
      const at = marked.indexOf("^");
      focus = (marked.slice(0, at).replaceAll("^", "").match(V2_WORD()) || []).length;
      marked = marked.replaceAll("^", "");
    }
    const pieces = [...chunks(marked)];
    const wordLists = pieces.map(([punct, piece]) => (punct ? [] : piece.match(V2_WORD()) || []));
    for (const [punct, piece] of pieces)
      if (!punct && (/\+(?![аеёиоуыэюя])/iu.test(piece) || /(?<![аеёиоуыэюя])́/iu.test(piece)))
        throw new UnsupportedAccent(`некорректный знак ударения: ${piece}`);
    const spellings = new Set();
    for (const words of wordLists) for (const word of words) {
      const [spelling] = v2Parse(word);
      spellings.add(spelling);
      for (const part of spelling.split("-")) spellings.add(part);
    }
    const ordered = [...spellings].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    const segments = pieces.filter(([p]) => !p).map(([, piece]) => piece.replace(ACUTE, "$1").replace(MARKED_VOWEL, ""));
    const rawSegments = segments.map((s) => this.espeakLine(s));
    const rawByWord = new Map(ordered.map((w) => [w, this.espeakLine(w)]));
    const rawFor = (w) => { if (!rawByWord.has(w)) throw new Error(`no raw for ${w}`); return rawByWord.get(w); };
    const symbols = [BOS], stresses = [0], unknown = [], spans = [];
    let segment = 0;
    pieces.forEach(([punct, piece], n) => {
      if (punct) {
        // text.py: a dash pauses as ";", except right after a single one-syllable word ("Я — врач")
        let prev = n > 0 && !pieces[n - 1][0] ? [...wordLists[n - 1]] : null;
        while (prev && prev.length > 1 && DASH_CONJUNCTIONS.has(v2Parse(prev[0])[0])) prev.shift();  // "а он — учитель"
        const short = prev !== null && prev.length === 1 && countVowels(v2Parse(prev[0])[0]) <= 1;
        const mark = piece === "—" && !short ? ";" : piece;
        if (symbols[symbols.length - 1] !== mark) { symbols.push(mark); stresses.push(0); }
        return;
      }
      const words = wordLists[n];
      let contextual = rawSegments[segment++].split(/\s+/u).filter(Boolean);
      if (contextual.length !== words.length) contextual = words.map((w) => rawFor(v2Parse(w)[0]));
      words.forEach((word, k) => {
        const raw = v2Compound(word, contextual[k], table, rawFor);
        let start = symbols.length;
        for (const rawWord of raw.split(/\s+/u).filter(Boolean)) {
          const last = symbols[symbols.length - 1];
          if (PHONE_SET.has(last) || last === UNK) { symbols.push(SP); stresses.push(0); }
          for (let [phone, mapped, carrier, level] of wordPhones(rawWord)) {
            if (!mapped) { unknown.push(phone); mapped = [UNK]; } else [mapped, carrier] = speakable(mapped, carrier);
            mapped.forEach((p, i) => { symbols.push(p); stresses.push(i === carrier ? level : 0); });
          }
        }
        if (symbols[start] === SP) start += 1;
        spans.push([start, symbols.length]);
      });
    });
    if (!symbols.some((s) => PHONE_SET.has(s) || s === UNK)) throw new NothingToPronounce("фонемизатор не нашёл произносимых слов");
    symbols.push(EOS); stresses.push(0);
    return { symbols, ids: symbols.map((s) => SYMBOL_TO_ID.get(s)), stress: stresses, unknown,
             words: spans, focus: focus !== null && focus < spans.length ? focus : null };
  }
}

// ---- segments.py ----
const SPACE = /[\s﻿]+/gu;
const SENTENCE_END = /(?:(?<=[.!?…])|(?<=[.!?…]["')\]]))\s+(?=["'(\[]?[A-ZА-ЯЁ0-9])/u;
const NOT_AN_END = /(?:(?<![\p{L}\p{N}_])(?:mr|mrs|ms|dr|prof|sr|jr|st|vs|etc|no|inc|ltd|co|ул|им|стр|рис|e\.g|i\.e|a\.m|p\.m)|(?<![\p{L}\p{N}_])[A-ZА-ЯЁ])\.$/iu;
const CLAUSE_END = /(?<=[,;:—])\s+/u;
const TEXT_END = /[\s﻿]+$/u;
const CLOSING = "\"'”’)]»";
const hasAlnum = (s) => /[\p{L}\p{N}]/u.test(s);

export function sentences(text) {
  const parts = []; let current = "";
  for (const piece of text.replace(SPACE, " ").trim().split(SENTENCE_END)) {
    current = current ? `${current} ${piece}` : piece;
    if (!NOT_AN_END.test(current)) { parts.push(current); current = ""; }
  }
  if (current) parts.push(current);
  return parts.filter(hasAlnum);
}

export function finished(text) {
  const body = text.replace(TEXT_END, "");
  if (!body) return text;
  const words = body.split(/[\s﻿]+/u);
  const last = words[words.length - 1];
  let marked;
  if (hasAlnum(last)) {
    let stripped = last; while (stripped && CLOSING.includes(stripped[stripped.length - 1])) stripped = stripped.slice(0, -1);
    marked = ".!?…,;:".includes(stripped.slice(-1)) && stripped.length > 0;
  } else marked = [...last].some((c) => ".!?…".includes(c)) || [",", ";", ":"].includes(last);
  return marked ? text : body + ".";
}

export function shorter(text) {
  const pieces = text.split(CLAUSE_END);
  if (pieces.length > 1) return pieces;
  const words = text.split(" ");
  if (words.length < 2) return [];
  const half = Math.floor((words.length + 1) / 2);
  return [words.slice(0, half).join(" "), words.slice(half).join(" ")];
}

/** segments.utterances: a line break ends a sentence even without a mark. */
export function utterances(text) {
  return text.split(/[\r\n]+/u).filter((line) => line.trim()).flatMap((line) => sentences(finished(line)));
}
