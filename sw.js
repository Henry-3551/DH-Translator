let CACHE_VERSION = 'app-v21';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('CACHE_VERSION').then((cache) => cache.addAll([
      '/',
      'index.html',
      'index.js',
      'style.css',
      'translate.js',
      'manifest.json',
      'banner.jpg',
      'copy.png',
      'copied.png',
      'logo.png',
      'logo-icon.png',
      'move_to.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
