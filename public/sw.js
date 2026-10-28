// Service Worker de Alta Performance para Internet Lenta (Moçambique 2G/3G & Offline)
const CACHE_NAME = 'rumo-seguro-v2';
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/site.webmanifest',
  '/favicon.ico',
  '/mockup principal.webp',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/android-chrome-192x192.png'
];

// Instalação: Pré-carregar os ficheiros estruturais mínimos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Pré-cache parcial:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Ativação: Limpar caches antigas e assumir controlo imediato
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia de Fetch Otimizada para Conexões Lentas
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Não interceptar requisições POST (ex: Meta CAPI /api/meta-events) ou extensões de navegador
  if (request.method !== 'GET' || url.protocol.startsWith('chrome-extension')) {
    return;
  }

  // Não fazer cache de APIs analíticas externas em tempo real
  if (url.hostname.includes('facebook.com') || url.hostname.includes('google-analytics.com')) {
    return;
  }

  // 1. Para navegação de páginas (HTML): Estratégia Network com Fallback Rápido para Cache (1.8s timeout)
  // Em internet 2G/3G lenta, se a rede demorar mais de 1.8s, devolve o HTML do cache instantaneamente!
  if (request.mode === 'navigate') {
    event.respondWith(
      new Promise((resolve) => {
        let isTimedOut = false;
        const timeoutId = setTimeout(() => {
          isTimedOut = true;
          caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              resolve(cachedResponse);
            }
          });
        }, 1800);

        fetch(request)
          .then((networkResponse) => {
            clearTimeout(timeoutId);
            if (!isTimedOut && networkResponse && networkResponse.status === 200) {
              const copy = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
              resolve(networkResponse);
            } else if (isTimedOut) {
              // Atualizar cache em segundo plano se a rede responder depois do timeout
              const copy = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            } else {
              resolve(networkResponse);
            }
          })
          .catch(() => {
            clearTimeout(timeoutId);
            caches.match(request).then((cachedResponse) => {
              resolve(cachedResponse || caches.match('/'));
            });
          });
      })
    );
    return;
  }

  // 2. Para Imagens, Fontes, CSS e JavaScript: Stale-While-Revalidate
  // Devolve imediatamente o que estiver em cache (0ms) e atualiza silenciosamente pela rede.
  const isStaticAsset =
    request.destination === 'image' ||
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'font' ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com');

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        // Se já temos em cache, entrega instantaneamente (mesmo com 0kbps de internet!)
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Padrão: Network com fallback para Cache
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
