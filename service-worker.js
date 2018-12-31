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
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});