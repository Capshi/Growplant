self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("growplant-offline").then((cache) => {
            return cache.addAll(
                [
                    "./",
                    "images/plant1.png",
                    "images/plant2.png",
                    "images/plant3.png",
                    "images/water.png",
                    "growplant.js",
                    "styles.css"
                ]
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});