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
  // English phones eSpeak emits outside the model's inventory (text.py, 28.11).
  "ɒ": ["o"], "əl": ["ʌ", "ɭ"], "iə": ["i", "ʌ"], "eə": ["ɛ", "ʌ"], "aɪə": ["a", "j", "ʌ"], "ʊə": ["u", "ʌ"], "iːː": ["i"],
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

// ---- Numbers with their case (text.py _v2_spoken_numbers; num2words ru, inanimate) ----
const CARD = {   // nominative, genitive, dative, prepositional
  1: ["один", "одного", "одному", "одном"], 2: ["два", "двух", "двум", "двух"], 3: ["три", "трёх", "трём", "трёх"],
  4: ["четыре", "четырёх", "четырём", "четырёх"], 5: ["пять", "пяти", "пяти", "пяти"], 6: ["шесть", "шести", "шести", "шести"],
  7: ["семь", "семи", "семи", "семи"], 8: ["восемь", "восьми", "восьми", "восьми"], 9: ["девять", "девяти", "девяти", "девяти"],
  10: ["десять", "десяти", "десяти", "десяти"], 11: ["одиннадцать", "одиннадцати", "одиннадцати", "одиннадцати"],
  12: ["двенадцать", "двенадцати", "двенадцати", "двенадцати"], 13: ["тринадцать", "тринадцати", "тринадцати", "тринадцати"],
  14: ["четырнадцать", "четырнадцати", "четырнадцати", "четырнадцати"], 15: ["пятнадцать", "пятнадцати", "пятнадцати", "пятнадцати"],
  16: ["шестнадцать", "шестнадцати", "шестнадцати", "шестнадцати"], 17: ["семнадцать", "семнадцати", "семнадцати", "семнадцати"],
  18: ["восемнадцать", "восемнадцати", "восемнадцати", "восемнадцати"], 19: ["девятнадцать", "девятнадцати", "девятнадцати", "девятнадцати"],
  20: ["двадцать", "двадцати", "двадцати", "двадцати"], 30: ["тридцать", "тридцати", "тридцати", "тридцати"],
  40: ["сорок", "сорока", "сорока", "сорока"], 50: ["пятьдесят", "пятидесяти", "пятидесяти", "пятидесяти"],
  60: ["шестьдесят", "шестидесяти", "шестидесяти", "шестидесяти"], 70: ["семьдесят", "семидесяти", "семидесяти", "семидесяти"],
  80: ["восемьдесят", "восьмидесяти", "восьмидесяти", "восьмидесяти"], 90: ["девяносто", "девяноста", "девяноста", "девяноста"],
  100: ["сто", "ста", "ста", "ста"], 200: ["двести", "двухсот", "двумстам", "двухстах"], 300: ["триста", "трёхсот", "трёмстам", "трёхстах"],
  400: ["четыреста", "четырёхсот", "четырёмстам", "четырёхстах"], 500: ["пятьсот", "пятисот", "пятистам", "пятистах"],
  600: ["шестьсот", "шестисот", "шестистам", "шестистах"], 700: ["семьсот", "семисот", "семистам", "семистах"],
  800: ["восемьсот", "восьмисот", "восьмистам", "восьмистах"], 900: ["девятьсот", "девятисот", "девятистам", "девятистах"],
};
const FEM = { 1: ["одна", "одной", "одной", "одной"], 2: ["две", "двух", "двум", "двух"] };
const CASE_INDEX = { nominative: 0, genitive: 1, dative: 2, prepositional: 3 };
const THOUSAND = { one: ["тысяча", "тысячи", "тысяче", "тысяче"], few: ["тысячи", "тысяч", "тысячам", "тысячах"], many: ["тысяч", "тысяч", "тысячам", "тысячах"] };

function below1000(n, c, feminine = false) {
  const out = [];
  const h = Math.floor(n / 100) * 100, rest = n % 100;
  if (h) out.push(CARD[h][c]);
  if (rest >= 10 && rest < 20) out.push(CARD[rest][c]);
  else {
    const t = Math.floor(rest / 10) * 10, u = rest % 10;
    if (t) out.push(CARD[t][c]);
    if (u) out.push((feminine && FEM[u] ? FEM[u] : CARD[u])[c]);
  }
  return out;
}

function cardinal(n, caseName) {
  const c = CASE_INDEX[caseName];
  if (n === 0) return ["ноль", "ноля", "нолю", "ноле"][c];
  const thousands = Math.floor(n / 1000), rest = n % 1000, out = [];
  if (thousands) {
    if (!(thousands === 1 && c === 0)) out.push(...below1000(thousands, c, true));   // «тысяча», but «одной тысячи»
    const last = thousands % 100 >= 11 && thousands % 100 <= 19 ? 5 : thousands % 10;
    const form = last === 1 ? "one" : last >= 2 && last <= 4 ? "few" : "many";
    // nominative "две тысячи", oblique "двух тысяч": num2words takes the plural form in the oblique cases after 2-4
    out.push(c === 0 ? THOUSAND[form][0] : form === "one" ? THOUSAND.one[c] : THOUSAND.many[c]);
  }
  if (rest) out.push(...below1000(rest, c));
  return out.join(" ");
}

const ORD_STEM = {   // stem, nominative masculine ending
  1: ["перв", "ый"], 2: ["втор", "ой"], 3: ["трет", "ий"], 4: ["четвёрт", "ый"], 5: ["пят", "ый"], 6: ["шест", "ой"], 7: ["седьм", "ой"],
  8: ["восьм", "ой"], 9: ["девят", "ый"], 10: ["десят", "ый"], 11: ["одиннадцат", "ый"], 12: ["двенадцат", "ый"], 13: ["тринадцат", "ый"],
  14: ["четырнадцат", "ый"], 15: ["пятнадцат", "ый"], 16: ["шестнадцат", "ый"], 17: ["семнадцат", "ый"], 18: ["восемнадцат", "ый"],
  19: ["девятнадцат", "ый"], 20: ["двадцат", "ый"], 30: ["тридцат", "ый"], 40: ["сороков", "ой"], 50: ["пятидесят", "ый"],
  60: ["шестидесят", "ый"], 70: ["семидесят", "ый"], 80: ["восьмидесят", "ый"], 90: ["девяност", "ый"], 100: ["сот", "ый"],
  200: ["двухсот", "ый"], 300: ["трёхсот", "ый"], 400: ["четырёхсот", "ый"], 500: ["пятисот", "ый"], 600: ["шестисот", "ый"],
  700: ["семисот", "ый"], 800: ["восьмисот", "ый"], 900: ["девятисот", "ый"],
};

function ordinalWord([stem, nominative], caseName, gender) {
  const soft = nominative === "ий";
  if (caseName === "genitive") return stem + (soft ? "ьего" : "ого");
  if (caseName === "dative") return stem + (soft ? "ьему" : "ому");
  if (caseName === "prepositional") return stem + (soft ? "ьем" : "ом");
  if (gender === "n") return stem + (soft ? "ье" : "ое");          // nominative / inanimate accusative
  return stem + nominative;
}

function ordinal(n, caseName, gender = "m") {
  const thousands = Math.floor(n / 1000), rest = n % 1000;
  if (!rest && thousands) {                       // 2000 → двухтысячный: the thousands fuse into one word
    const prefix = thousands === 1 ? "" : cardinal(thousands, "genitive").replace(/\s+/gu, "").replace(/^одной$/u, "");
    return ordinalWord([prefix + "тысячн", "ый"], caseName, gender);
  }
  const words = thousands ? [cardinal(thousands * 1000, "nominative")] : [];
  const h = Math.floor(rest / 100) * 100, r = rest % 100;
  const parts = [];
  if (h) parts.push(h);
  if (r >= 10 && r < 20) parts.push(r);
  else { if (Math.floor(r / 10)) parts.push(Math.floor(r / 10) * 10); if (r % 10) parts.push(r % 10); }
  const last = parts.pop();
  for (const p of parts) words.push(CARD[p][0]);
  words.push(ordinalWord(ORD_STEM[last], caseName, gender));
  return words.join(" ");
}

const MONTHS = "января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря";
const DATE = new RegExp(String.raw`(?<![\p{L}\p{N}_.,:])(?:(?<prep>[Кк]|[Нн]а|[Пп]о)\s+)?(?<day>\d{1,2})\s+(?<month>` + MONTHS +
  String.raw`)(?:\s+(?<year>\d{3,4})\s*(?<unit>года|г\.))?(?![\p{L}\p{N}_])`, "gu");
const YEAR = new RegExp(String.raw`(?<![\p{L}\p{N}_.,:])(?:(?<prep>[Вв]|[Кк]|[Сс]|[Дд]о|[Оо]т|[Пп]осле|[Оо]коло|[Нн]ачиная\s+с)\s+)?(?<year>\d{3,4})\s*` +
  String.raw`(?<unit>году|года|год|г\.)(?![\p{L}\p{N}_])`, "gu");
const GOVERNED = new RegExp(String.raw`(?<![\p{L}\p{N}_])(?<prep>[Сс]о?|[Оо]т|[Дд]о|[Оо]коло|[Бб]олее|[Мм]енее|[Пп]осле|[Бб]ез|[Ии]з|[Кк]роме|[Дд]ля|[Уу]|` +
  String.raw`[Кк]о?|[Оо]|[Оо]б)\s+(?<number>\d{1,3}(?:[  ]\d{3})+|\d{1,6})(?![\d.,:]\d|[\p{L}\p{N}_]|\s*(?:` + MONTHS + String.raw`|году|года|год|г\.))`, "gu");
const GOVERNED_CASE = { "с": "genitive", "со": "genitive", "от": "genitive", "до": "genitive", "около": "genitive", "более": "genitive",
  "менее": "genitive", "после": "genitive", "без": "genitive", "из": "genitive", "кроме": "genitive", "для": "genitive", "у": "genitive",
  "к": "dative", "ко": "dative", "о": "prepositional", "об": "prepositional" };

export function spokenNumbers(text) {
  text = text.replace(DATE, (...args) => {
    const g = args[args.length - 1], whole = args[0];
    const prep = (g.prep || "").toLowerCase(), day = Number(g.day);
    if (day < 1 || day > 31) return whole;
    const caseName = { "к": "dative", "на": "accusative", "по": "accusative" }[prep] || "genitive";
    let out = (g.prep ? g.prep + " " : "") + ordinal(day, caseName === "accusative" ? "nominative" : caseName, "n") + " " + g.month;
    if (g.year) out += " " + ordinal(Number(g.year), "genitive") + " года";
    return out;
  });
  text = text.replace(YEAR, (...args) => {
    const g = args[args.length - 1], offset = args[args.length - 3], whole = args[0], source = args[args.length - 2];
    const prep = (g.prep || "").toLowerCase();
    let unit = g.unit, end = "";
    if (unit === "г.") {
      unit = prep === "в" ? "году" : "года";
      const after = source.slice(offset + whole.length).trimStart();
      if (!after || after[0] !== after[0].toLowerCase()) end = ".";
    }
    let caseName = { "году": prep === "к" ? "dative" : "prepositional", "года": "genitive", "год": "nominative" }[unit];
    return (g.prep ? g.prep + " " : "") + ordinal(Number(g.year), caseName) + " " + unit + end;
  });
  return text.replace(GOVERNED, (...args) => {
    const g = args[args.length - 1];
    return g.prep + " " + cardinal(Number(g.number.replace(/\s/gu, "")), GOVERNED_CASE[g.prep.toLowerCase()]);
  });
}

// ---- bilingual.py russian_letter_names: in a sentence with Cyrillic, Roman numerals (I, V, X, L) become digits and
// all-caps Latin acronyms become Russian letter names (API → эй пи ай). The browser has no English front end yet, so this
// is the part of v0.4's reading of Latin text it shares with Python. ----
const LETTER_NAMES = { A: "эй", B: "би", C: "си", D: "ди", E: "и", F: "эф", G: "джи", H: "эйч", I: "ай", J: "джей", K: "кей", L: "эл",
  M: "эм", N: "эн", O: "оу", P: "пи", Q: "кью", R: "ар", S: "эс", T: "ти", U: "ю", V: "ви", W: "дабл-ю", X: "экс", Y: "уай", Z: "зед" };
const ROMAN = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/u;
const ROMAN_VALUE = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
function roman(token) {
  if (!token || !ROMAN.test(token)) return null;
  let total = 0;
  for (let i = 0; i < token.length; i++) {
    const value = ROMAN_VALUE[token[i]], next = token[i + 1];
    total += next !== undefined && ROMAN_VALUE[next] > value ? -value : value;
  }
  return total;
}
export function russianLetterNames(text) {
  if (!/[а-яё]/iu.test(text)) return text;
  text = text.replace(/(?<![A-Za-z0-9/])[IVXL]+(?![A-Za-z0-9/])/gu, (m) => (roman(m) ? String(roman(m)) : m));
  return text.replace(/(?<![A-Za-z0-9])[A-Z]{2,6}(?:\/[A-Z]{2,6})*(?![A-Za-z0-9])/gu,
    (m) => [...m].filter((ch) => ch !== "/").map((ch) => LETTER_NAMES[ch]).join(" "));
}

// text.py _compound_stress: eSpeak stresses the first part of видео-/аудио-... compounds; take the known word's stress.
const COMPOUND_PREFIXES = ["видео", "аудио", "радио", "фото", "медиа", "стерео"];
export function compoundStress(spelling, table) {
  for (const prefix of COMPOUND_PREFIXES) {
    const rest = spelling.slice(prefix.length);
    if (spelling.startsWith(prefix) && [...rest].length >= 3 && Object.hasOwn(table.defaults, rest)) {
      return String([...prefix].filter(isRuVowel).length + Number(table.defaults[rest]));
    }
  }
  return undefined;
}

/** The stressed vowel number the classifier picks for words[i] (text.py _context_stress). */
export function contextStress(entry, words, i) {
  const features = ["b"];
  for (const k of [-2, -1, 1, 2]) {
    const j = i + k;
    const w = j >= 0 && j < words.length ? words[j] : j < 0 ? "^" : "$";
    features.push(`${k}=${w}`);
    if ([...w].length > 3) features.push(`${k}s=${[...w].slice(-3).join("")}`);
  }
  const scores = entry.classes.map(() => 0);
  for (const f of features) {
    const row = Object.hasOwn(entry.weights, f) ? entry.weights[f] : [];
    row.forEach((v, c) => { scores[c] += v; });
  }
  let best = 0;
  scores.forEach((v, c) => { if (v > scores[best]) best = c; });
  return entry.classes[best];
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
   *  homographs: homograph_defaults.json ({word: {default}}); homographModel: homograph_model.json. */
  constructor(espeak, pronunciations, homographs, homographModel = {}) {
    this.homographModel = homographModel;   // homograph_model.json: per-word stress in context (text.py _context_stress)
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
    const CONTEXT = /[а-яё]+/gu, strip = (t) => t.toLowerCase().replace(/[+\u0301^]/gu, "");
    const context = strip(text).match(CONTEXT) || [];
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
      let vowel;
      const compound = this.known(spelling) ? undefined : compoundStress(spelling, this.table);
      if (compound !== undefined) {
        vowel = compound;
      } else if (Object.hasOwn(this.homographModel, spelling) && !spelling.includes("ё")) {
        const position = (strip(text.slice(0, index)).match(CONTEXT) || []).length;
        vowel = position < context.length ? contextStress(this.homographModel[spelling], context, position) : undefined;
      } else {
        vowel = spelling in this.table.defaults ? undefined : this.homographs[spelling];
      }
      if (vowel === undefined || spelling.includes("ё")) return word;
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
    text = normalizeText(russianLetterNames(text));
    let marked = this.inferenceHints(spokenNumbers(spokenCurrency(text)));
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
            if (!mapped && SPEAKABLE[phone]) { mapped = SPEAKABLE[phone]; const k = mapped.findIndex((p) => VOWEL_SET.has(p)); carrier = k < 0 ? 0 : k; }
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
