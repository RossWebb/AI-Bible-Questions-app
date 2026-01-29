const CACHE = 'baebol-v2';
const FILES = [
  '/',
  'manifest.json',
  'BibleQ192.png',
  'BibleQ512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

// === FULL SCREEN ON LAUNCH ===
self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('message', e => {
  if (e.data === 'launch-fullscreen') {
    clients.matchAll({ type: 'window' }).then(clients => {
      clients.forEach(client => client.postMessage('fullscreen'));
    });
  }
});


