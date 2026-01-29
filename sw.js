const CACHE_NAME = 'baebel-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache only safe/known-good files. Comment out or fix failing ones.
      return cache.addAll([
        '/',                    // root page
        'index.html',
        'manifest.json',
        'BibleQ192.png',
        'BibleQ512.png'
        // Add your JS/CSS files if any, e.g. 'styles.css', 'app.js'
      ]).catch((error) => {
        console.error('Cache addAll failed – skipping problematic URLs:', error);
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
