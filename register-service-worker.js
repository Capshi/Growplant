if (navigator.serviceWorker.controller) {
    console.log("Active service worker found, no need to register.");
} else {
    // Register the service worker
    navigator.serviceWorker.register("service-worker.js", {
        scope: "./"
    }).then((reg) => {
        console.log(`Service worker has been registered for scope ${reg.scope}`);
    })
}