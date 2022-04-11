self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/https-test-page/a2hs/',
      '/https-test-page/a2hs/index.html',
      '/https-test-page/a2hs/index.js',
      '/https-test-page/a2hs/style.css',
      '/https-test-page/a2hs/images/fox1.jpg',
      '/https-test-page/a2hs/images/fox2.jpg',
      '/https-test-page/a2hs/images/fox3.jpg',
      '/https-test-page/a2hs/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
