// Service worker minimo — serve solo a soddisfare il requisito
// del browser per rendere l'app "installabile" sulla schermata Home.
const CACHE_NAME = 'rapporto-mensile-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
