/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b64be6823a09989642acb9c9867efd4e"
  },
  {
    "url": "about/index.html",
    "revision": "bd2606e5379946a6afd08c8a4e2e1a30"
  },
  {
    "url": "assets/css/1.styles.29e4421f.css",
    "revision": "bb3d79c94436ac5c9a4b8ad910c17a37"
  },
  {
    "url": "assets/css/3.styles.feab4137.css",
    "revision": "720612ac00038ddfd1e28fa4adb6e748"
  },
  {
    "url": "assets/css/styles.aa725d9b.css",
    "revision": "939e664d4fd34bc7426e67eb09f445f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.29e4421f.js",
    "revision": "60a9c8edece7098b49ec181ba5a3f5fd"
  },
  {
    "url": "assets/js/2.ca54ed0b.js",
    "revision": "d3d5a2a586ccacc5816fb160f434f2b5"
  },
  {
    "url": "assets/js/3.feab4137.js",
    "revision": "d77e2571194fa5cb936beb055b5168e1"
  },
  {
    "url": "assets/js/4.a7fe62b3.js",
    "revision": "bcd837e87ff6f6785f16c2fa71fa531d"
  },
  {
    "url": "assets/js/5.193d2aea.js",
    "revision": "0ba5570e9e8f496bdb79e6fc1defd3eb"
  },
  {
    "url": "assets/js/6.c26553b2.js",
    "revision": "0bcf3742df9a9e6ce987fe74bfcada11"
  },
  {
    "url": "assets/js/7.7d9bd229.js",
    "revision": "333fd74c7957657223dc25beaa053e91"
  },
  {
    "url": "assets/js/8.096aebbc.js",
    "revision": "f70dc5169a4053188d507753213b124e"
  },
  {
    "url": "assets/js/9.4500cc1c.js",
    "revision": "23b34673091df9289ac10ee292952310"
  },
  {
    "url": "assets/js/app.aa725d9b.js",
    "revision": "3a24a58da6dd3613e411f9181411f58a"
  },
  {
    "url": "contact/index.html",
    "revision": "4cb3bf73e45a43a643ce0d67f2b6d2b5"
  },
  {
    "url": "index.html",
    "revision": "1730a4fdc863543253176d14d220bb98"
  },
  {
    "url": "parallel/index.html",
    "revision": "b92ab7eb4c16b41c347d99e89b3aefbc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
