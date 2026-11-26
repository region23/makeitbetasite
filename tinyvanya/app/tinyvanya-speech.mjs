// Text -> audio with the ONNX graph: the same steps as tiny_vanya.onnx_infer.Speech.speak, for any onnxruntime
// (onnxruntime-web in the browser, onnxruntime-node in tests). The graph and the JSON metadata come from
// tiny_vanya.export (web/make_web_onnx.py makes the half-size browser copy).
import { NothingToPronounce, finished, sentences, shorter } from "./tinyvanya-frontend.mjs";

export class Speech {
  constructor(ort, session, meta, frontend) {
    this.ort = ort; this.session = session; this.meta = meta; this.frontend = frontend;
  }

  async run(phones, voiceId, speed) {
    const { Tensor } = this.ort;
    const n = phones.ids.length;
    const out = await this.session.run({
      tokens: new Tensor("int64", BigInt64Array.from(phones.ids, BigInt), [1, n]),
      stress: new Tensor("int64", BigInt64Array.from(phones.stress, BigInt), [1, n]),
      voice: new Tensor("int64", BigInt64Array.of(BigInt(voiceId)), [1]),
      speed: new Tensor("float32", Float32Array.of(speed), [1]),
      pitch_shift: new Tensor("float32", Float32Array.of(0), [1]),
      pitch_range: new Tensor("float32", Float32Array.of(1), [1]),
    });
    let frames = 0;
    for (const d of out.durations.data) frames += Number(d);
    return { audio: out.audio.data, frames };
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
        const { audio, frames } = await this.run(phones, voiceId, speed);
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
    for (const chunk of sentences(finished(text))) await pronounce(chunk);
    if (!output.length) throw new NothingToPronounce("в тексте нет произносимых слов");
    const wave = new Float32Array(output.reduce((n, a) => n + a.length, 0));
    let at = 0, peak = 0;
    for (const a of output) { wave.set(a, at); at += a.length; }
    for (const x of wave) peak = Math.max(peak, Math.abs(x));
    if (peak > 0.99) { const k = 0.99 / peak; for (let i = 0; i < wave.length; i++) wave[i] *= k; }
    return wave;
  }
}
