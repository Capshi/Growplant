self.addEventListener("install", (event) => {
    const indexPage = new Request("./");

    event.waitUntil(
        fetch(indexPage).then(async (response) => {
            const cache = await caches.open("growplant-offline");
            console.log(`[ServiceWorker] Cached index page during Install ${response.url}`);

            return cache.put(indexPage, response);
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log(`[ServiceWorker] Fetch ${event.request.url}`);
    event.respondWith(
        caches.match(event.request).then((response) => {
            console.log(`[ServiceWorker] Serving from cache ${event.request.url}`);
            return response || fetch(event.request);
        })
    );
});