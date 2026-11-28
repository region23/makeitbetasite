// Cross-origin isolation for the demo on GitHub Pages, which cannot send headers: this service worker adds
// COOP/COEP to the pages and scripts of /tinyvanya/, so onnxruntime-web may run on several threads
// (SharedArrayBuffer). Cross-origin requests (models, CDN) pass untouched; "credentialless" lets them load without
// CORP headers. A browser without credentialless support stays as before, on one thread.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (new URL(request.url).origin !== self.location.origin) return;
  if (request.cache === "only-if-cached" && request.mode !== "same-origin") return;
  event.respondWith(fetch(request).then((response) => {
    if (response.status === 0 || response.type === "opaque") return response;
    const headers = new Headers(response.headers);
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
    headers.set("Cross-Origin-Embedder-Policy", "credentialless");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }));
});
