// Module worker: loads eSpeak NG (WebAssembly), the front end and one ONNX model per voice, then speaks text.
// Messages in:  {type: "speak", id, text, voice, speed}
// Messages out: {type: "progress", voice, loaded, total} · {type: "ready", voice} · {type: "audio", id, audio, seconds, took}
//               {type: "error", id, message}
import * as ort from "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.29.0/dist/ort.wasm.min.mjs";
import TinyVanyaEspeak from "./espeak/tv-espeak.mjs";
import { Frontend, NothingToPronounce, UnsupportedAccent } from "./tinyvanya-frontend.mjs?v=20261128-v042";
import { Speech } from "./tinyvanya-speech.mjs?v=20261128-v042";
import { loadEnglish } from "./tinyvanya-english.mjs?v=20261128-v042";

const RELEASE = "v0.4";
const MODEL_BASE = `https://huggingface.co/region23/tiny-vanya/resolve/${RELEASE}/`;
const CACHE = `tiny-vanya-${RELEASE}`;
ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.29.0/dist/";
ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.min(4, navigator.hardwareConcurrency || 1) : 1;

// English words (v0.4): dizione in Pyodide, loaded at the first text with Latin letters. Until it loads, or if it
// cannot, Latin words are read by the Russian front end.
const PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/";
let english = null;

let base = null;           // {meta, frontend}
const speeches = {};       // voice -> Promise<Speech>

async function loadBase() {
  if (!base) base = (async () => {
    const here = new URL(".", import.meta.url);
    const [meta, homographs, homographModel, espeak] = await Promise.all([
      fetch(new URL(`tinyvanya-meta.json?v=${RELEASE}`, here)).then((r) => r.json()),
      fetch(new URL("homograph_defaults.json", here)).then((r) => r.json()),
      fetch(new URL(`homograph_model.json?v=${RELEASE}`, here)).then((r) => r.json()),
      TinyVanyaEspeak({ locateFile: (f) => new URL("espeak/" + f, here).href }),
    ]);
    return { meta, frontend: new Frontend(espeak, meta.pronunciations, homographs, homographModel) };
  })();
  return base;
}

async function download(url, voice) {
  let cache = null;
  try { cache = await caches.open(CACHE); const hit = await cache.match(url); if (hit) return new Uint8Array(await hit.arrayBuffer()); } catch { cache = null; }
  const response = await fetch(url);
  if (!response.ok) throw new Error(`модель не скачалась: HTTP ${response.status}`);
  const total = Number(response.headers.get("content-length")) || 0;
  const reader = response.body.getReader(), parts = [];
  let loaded = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    parts.push(value); loaded += value.length;
    postMessage({ type: "progress", voice, loaded, total });
  }
  const bytes = new Uint8Array(loaded);
  let at = 0; for (const p of parts) { bytes.set(p, at); at += p.length; }
  try { if (cache) await cache.put(url, new Response(bytes, { headers: { "content-type": "application/octet-stream" } })); } catch { /* storage full or blocked: keep going */ }
  return bytes;
}

function speechFor(voice) {
  if (!speeches[voice]) speeches[voice] = (async () => {
    const { meta, frontend } = await loadBase();
    const bytes = await download(MODEL_BASE + meta.models[voice], voice);
    const session = await ort.InferenceSession.create(bytes, { executionProviders: ["wasm"], graphOptimizationLevel: "all" });
    postMessage({ type: "ready", voice });
    return new Speech(ort, session, meta, frontend);
  })().catch((error) => { delete speeches[voice]; throw error; });
  return speeches[voice];
}

function englishFor({ meta, frontend }) {
  if (!english) english = (async () => {
    postMessage({ type: "status", message: "Загружаем английское произношение: около 15 МБ, это один раз…" });
    const { loadPyodide } = await import(PYODIDE + "pyodide.mjs");
    const zip = () => fetch(new URL(`dizione-web.zip?v=${RELEASE}`, import.meta.url))
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.arrayBuffer(); }).then((b) => new Uint8Array(b));
    frontend.setEnglish(await loadEnglish(() => loadPyodide({ indexURL: PYODIDE }), zip), meta.symbols);
  })().catch((error) => {
    english = null;
    postMessage({ type: "status", message: `Английское произношение не загрузилось (${error.message || error}); английские слова прочитаются по-русски.` });
  });
  return english;
}

self.onmessage = async ({ data }) => {
  const { id, type } = data;
  try {
    if (type === "load") { await speechFor(data.voice); return; }
    if (type === "speak") {
      const speech = await speechFor(data.voice);
      if (/[A-Za-z]/.test(data.text)) await englishFor(await loadBase());
      const t0 = performance.now();
      const audio = await speech.speak(data.text, data.voice, data.speed ?? 1);
      postMessage({ type: "audio", id, audio, seconds: audio.length / 24000, took: (performance.now() - t0) / 1000 }, [audio.buffer]);
    }
  } catch (error) {
    let message = error.message || String(error);
    if (error instanceof NothingToPronounce) message = "В тексте нет слов, которые можно прочитать.";
    else if (error instanceof UnsupportedAccent) message = `Не получилось разобрать ударение: ${error.message}. Знак «+» ставится перед гласной: з+амок.`;
    postMessage({ type: "error", id, message });
  }
};
