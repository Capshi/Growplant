self.addEventListener("install", (event) => {
    const indexPage = new Request("index.html");

    event.waitUntil(
        fetch(indexPage).then(async (response) => {
            const cache = await caches.open("growplant-offline");
            console.log(`Cached index page during Install ${response.url}`);

            return cache.put(indexPage, response);
        })
    );
});