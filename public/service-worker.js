// NAI Service Worker for PWA
// Bump version to invalidate old caches after deploys
const CACHE_NAME = 'nai-cache-v2';
// Only pre-cache core static assets that are safe and version-stable
const urlsToCache = [
  '/manifest.json',
  '/favicon.ico',
  '/image.png'
];

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log('Cache installation failed:', err);
      })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control immediately
  return self.clients.claim();
});

// Fetch event - network first, fall back to cache
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip cross-origin
  if (!request.url.startsWith(self.location.origin)) return;

  const accept = request.headers.get('accept') || '';
  const dest = request.destination;

  // Never cache HTML or app JS/CSS to avoid stale bundle mismatches
  if (request.mode === 'navigate' || accept.includes('text/html') || dest === 'script' || dest === 'style') {
    event.respondWith(
      fetch(request).catch(() => new Response('<!DOCTYPE html><title>Offline</title><h1>You are offline</h1>', { headers: { 'Content-Type': 'text/html' } }))
    );
    return;
  }

  // For images/fonts and other static assets: network-first with cache fallback
  if (dest === 'image' || dest === 'font' || dest === 'audio' || dest === 'video') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Default: just go to network
  event.respondWith(fetch(request));
});
