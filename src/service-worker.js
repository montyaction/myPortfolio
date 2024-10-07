// Define cache name and assets to cache
const CACHE_NAME = 'my-portfolio-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/bundle.js',
    '/styles.css',
    '/js/scripts.js',
    '/fonts/fa-brands-400.woff2',
    '/fonts/fa-brands-900.woff2',
    '/images'
    // Add other assets you want to cache
];

// Install Event - caching files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching all assets');
                return cache.addAll(assetsToCache);
            })
    );
});

// Activate Event - cleaning up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Clearing old cache:', cache);
                        return cache.delete(cache);
                    }
                })
            )
        })
    )
})

// Fetch Event - serving cached files
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('Serving from cache:', event.request.url);
                return response;
            }
            console.log('Fetching:', event.request.url);
            return fetch(event.request);
        })
    );
});
