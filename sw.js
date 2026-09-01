// 퍼머컬처ON 서비스 워커 — 오프라인에서도 도감이 열립니다.
// 앱을 업데이트할 때마다 아래 버전 숫자를 1씩 올려주세요!
const VERSION = "pcon-v12";
const SHELL = [
  "./", "./index.html", "./app.js",
  "./config.js", "./vendor/supabase.js", "./data/api.js",
  "./data/plantdata.js", "./data/content.js",
  "./privacy.html", "./terms.html",
  "./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png",
  "./textures/paper.png", "./textures/soil.png", "./textures/wood.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(() => caches.match(e.request))
  );
});
