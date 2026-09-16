/* ═══════════════════════════════════════════════════════════════════════════
   Service worker du menu Venezia Ice.
   Stratégie : « stale-while-revalidate » — le client voit la page
   instantanément (même avec un réseau faible en salle), et la version à jour
   est téléchargée en arrière-plan pour la visite suivante.

   ⚠️  Après une modification du menu ou des prix, incrémenter VERSION :
       les anciens caches sont alors supprimés et tous les téléphones
       basculent sur la nouvelle version.
   ═══════════════════════════════════════════════════════════════════════════ */
const VERSION = 'venezia-v2';
const RESSOURCES = [
  './',
  './index.html',
  './liens.html',
  './avis.html',
  './assets/venezia.css',
  './assets/venezia.js',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(RESSOURCES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n !== VERSION).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  e.respondWith(
    caches.open(VERSION).then(cache =>
      cache.match(req).then(enCache => {
        const reseau = fetch(req).then(rep => {
          if (rep && rep.status === 200) cache.put(req, rep.clone());
          return rep;
        }).catch(() => enCache || caches.match('./index.html'));
        return enCache || reseau;
      })
    )
  );
});
