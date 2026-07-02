// Service worker for Receipt Note Printer — makes it installable and offline-capable.
// Bump CACHE when you change any cached file so clients pick up the new version.
const CACHE = 'receipt-notes-v1';
const ASSETS = [
  './',
  './index.html',
  './favicon.svg',
  './icon.svg',
  './manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache-first: serve from cache, fall back to network, and keep the cache fresh.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return resp;
      }).catch(() => cached)
    )
  );
});
