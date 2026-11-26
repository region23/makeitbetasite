// Малёк Ванёк demo: the model runs in a module worker on this device (app/tinyvanya-worker.mjs).
const $ = (id) => document.getElementById(id);
const text = $("tv-text"), go = $("tv-go"), statusText = $("tv-status-text"), bar = $("tv-bar"), fill = $("tv-bar-fill");
const out = $("tv-out"), player = $("tv-audio"), download = $("tv-download"), speed = $("tv-speed"), speedOut = $("tv-speed-out");
let voice = "M1", worker = null, nextId = 1, busy = false, url = null;
const ready = new Set(), pending = new Map();

const mb = (n) => (n / 1e6).toFixed(0).replace(".", ",");
const say = (message) => { statusText.textContent = message; };

function startWorker() {
  if (worker) return worker;
  worker = new Worker(new URL("app/tinyvanya-worker.mjs?v=20261127c", import.meta.url), { type: "module" });
  worker.onmessage = ({ data }) => {
    if (data.type === "progress") {
      bar.hidden = false;
      fill.style.width = data.total ? `${(100 * data.loaded / data.total).toFixed(1)}%` : "50%";
      say(`Скачиваем ${data.voice === "M1" ? "мужской" : "женский"} голос: ${mb(data.loaded)}${data.total ? ` из ${mb(data.total)}` : ""} МБ. Это один раз.`);
    } else if (data.type === "ready") {
      ready.add(data.voice); bar.hidden = true; say("Голос загружен, озвучиваем…");
    } else if (data.type === "audio" || data.type === "error") {
      const done = pending.get(data.id); pending.delete(data.id);
      if (done) done(data);
    }
  };
  worker.onerror = (event) => { say(`Не удалось запустить модель в этом браузере: ${event.message || "ошибка воркера"}.`); busy = false; go.disabled = false; };
  return worker;
}

function wav(samples, rate = 24000) {
  const buffer = new ArrayBuffer(44 + samples.length * 2), view = new DataView(buffer);
  const put = (at, s) => { for (let i = 0; i < s.length; i++) view.setUint8(at + i, s.charCodeAt(i)); };
  put(0, "RIFF"); view.setUint32(4, 36 + samples.length * 2, true); put(8, "WAVEfmt ");
  view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true);
  view.setUint32(24, rate, true); view.setUint32(28, rate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true);
  put(36, "data"); view.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i++) view.setInt16(44 + i * 2, Math.max(-1, Math.min(1, samples[i])) * 32767, true);
  return new Blob([buffer], { type: "audio/wav" });
}

async function speak() {
  const value = text.value.trim();
  if (!value) { say("Напишите текст."); return; }
  if (busy) return;
  busy = true; go.disabled = true;
  if (!ready.has(voice)) say("Загружаем модель…"); else say("Озвучиваем…");
  const id = nextId++;
  const result = await new Promise((resolve) => { pending.set(id, resolve); startWorker().postMessage({ type: "speak", id, text: value, voice, speed: Number(speed.value) }); });
  busy = false; go.disabled = false; bar.hidden = true;
  if (result.type === "error") { say(result.message); return; }
  if (url) URL.revokeObjectURL(url);
  url = URL.createObjectURL(wav(result.audio));
  player.src = url; download.href = url; out.hidden = false;
  player.play().catch(() => {});
  say(`${result.seconds.toFixed(1).replace(".", ",")} с речи за ${result.took.toFixed(2).replace(".", ",")} с прямо в вашем браузере.`);
}

go.addEventListener("click", speak);
text.addEventListener("keydown", (e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) speak(); });
speed.addEventListener("input", () => { speedOut.textContent = Number(speed.value).toFixed(2).replace(".", ","); });
document.querySelectorAll(".tv-voices button").forEach((b) => b.addEventListener("click", () => {
  voice = b.dataset.voice;
  document.querySelectorAll(".tv-voices button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
}));
document.querySelectorAll("[data-example]").forEach((b) => b.addEventListener("click", () => { text.value = b.dataset.example; text.focus(); }));

// samples
const sample = new Audio(); let current = null;
document.querySelectorAll(".tv-chip").forEach((b) => b.addEventListener("click", () => {
  if (current === b) { sample.pause(); b.classList.remove("playing"); current = null; return; }
  if (current) current.classList.remove("playing");
  current = b; b.classList.add("playing"); sample.src = new URL(b.dataset.src, location.href).href;
  sample.play().catch(() => { b.classList.remove("playing"); current = null; });
}));
sample.addEventListener("ended", () => { if (current) current.classList.remove("playing"); current = null; });
