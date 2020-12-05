importScripts("/precache-manifest.7195188de59d14fda259402455edcc4f.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.skipWaiting();
workbox.clientsClaim();

