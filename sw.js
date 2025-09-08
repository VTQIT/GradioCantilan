const CACHE_NAME = "video-cache-v1";
const videoFiles = [
  "player/VPsara.mp4",
  "player/video02.mp4",
  "player/video03.mp4",
  "player/video04.mp4"
];

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("message", event => {
  if (event.data.action === "cacheVideos") {
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(videoFiles).then(() => {
        console.log("✅ Videos cached after logo trigger");
      });
    });
  }
});
