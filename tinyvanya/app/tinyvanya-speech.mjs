// Text -> audio with the ONNX graph: the same steps as tiny_vanya.onnx_infer.Speech.speak, for any onnxruntime
// (onnxruntime-web in the browser, onnxruntime-node in tests). The graph and the JSON metadata come from
// tiny_vanya.export (web/make_web_onnx.py makes the half-size browser copy).
import { NothingToPronounce, shorter, utterances } from "./tinyvanya-frontend.mjs?v=20261128-v044";
import { guarded } from "./tinyvanya-intonation.mjs?v=20261128-v044";

export class Speech {
  constructor(ort, session, meta, frontend) {
    this.ort = ort; this.session = session; this.meta = meta; this.frontend = frontend;
  }

  /** One call of the graph; offset (per-token log F0) only for v0.2 graphs with a pitch_offset input. */
  async run(phones, voiceId, speed, offset = null) {
    const { Tensor } = this.ort;
    const n = phones.ids.length;
    const feed = {
      tokens: new Tensor("int64", BigInt64Array.from(phones.ids, BigInt), [1, n]),
      stress: new Tensor("int64", BigInt64Array.from(phones.stress, BigInt), [1, n]),
      voice: new Tensor("int64", BigInt64Array.of(BigInt(voiceId)), [1]),
      speed: new Tensor("float32", Float32Array.of(speed), [1]),
      pitch_shift: new Tensor("float32", Float32Array.of(0), [1]),
      pitch_range: new Tensor("float32", Float32Array.of(1), [1]),
    };
    const control = this.meta.inputs && this.meta.inputs.includes("pitch_offset");
    if (control) feed.pitch_offset = new Tensor("float32", offset ? Float32Array.from(offset) : new Float32Array(n), [1, n]);
    const out = await this.session.run(feed);
    const durations = Array.from(out.durations.data, Number);
    let prosody = null;
    if (control && out.prosody) {
      const d = out.prosody.data; prosody = [];
      for (let i = 0; i < d.length; i += 2) prosody.push([d[i], d[i + 1]]);
    }
    return { audio: out.audio.data, durations, prosody };
  }

  /** Text of any length -> Float32Array at meta.sample_rate, peak at most 0.99. */
  async speak(text, voice, speed = 1.0) {
    const voiceId = this.meta.voices.indexOf(voice);
    if (voiceId < 0) throw new Error(`нет голоса ${voice}`);
    const limit = this.meta.max_tokens - 12, output = [];
    const pronounce = async (piece) => {
      let phones;
      try { phones = this.frontend.phonemize(piece); }
      catch (error) { if (error instanceof NothingToPronounce) return; throw error; }
      if (phones.unknown.length) throw new Error(`нет фонем в словаре: ${[...new Set(phones.unknown)].join(", ")}`);
      if (phones.ids.length <= limit) {
        const { audio, durations } = await guarded(piece, phones, (offset) => this.run(phones, voiceId, speed, offset));
        const frames = durations.reduce((a, b) => a + b, 0);
        if (frames < this.meta.max_frames) {
          if (frames < 1 || audio.length !== frames * this.meta.hop) throw new Error("модель вернула неверный звук");
          output.push(audio);
          return;
        }
      }
      const parts = shorter(piece);
      if (!parts.length) throw new Error("одно слово не помещается в окно модели");
      for (const part of parts) await pronounce(part);
    };
    for (const chunk of utterances(text)) await pronounce(chunk);
    if (!output.length) throw new NothingToPronounce("в тексте нет произносимых слов");
    const wave = new Float32Array(output.reduce((n, a) => n + a.length, 0));
    let at = 0, peak = 0;
    for (const a of output) { wave.set(a, at); at += a.length; }
    for (const x of wave) peak = Math.max(peak, Math.abs(x));
    if (peak > 0.99) { const k = 0.99 / peak; for (let i = 0; i < wave.length; i++) wave[i] *= k; }
    return wave;
  }
}
