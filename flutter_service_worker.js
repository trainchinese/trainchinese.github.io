'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2ce088e727b94e448b94a3224ab76efc",
"index.html": "12d49918e584075c8788f101587cbbd7",
"/": "12d49918e584075c8788f101587cbbd7",
"main.dart.js": "b413a190ff0ca2521baaa720ae1ea2f4",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"screenshot.jpeg": "49c33bf7b41c72df51d121414fbc8838",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e34e0bdcc73bc5083532b69170632835",
".git/config": "59ed4ed89750468a0d9665f44546966d",
".git/objects/95/dec7e61403fe1c8d7f0258a300c44c2042cd09": "7738d26f43d5e27d6a15f6984cd12cfb",
".git/objects/92/4ba1cb64f5eab757e0e80c71f4b786995ec523": "caeb78ec9068bfccdac69337ee4dbb70",
".git/objects/92/8a64c21237dda54a9d34b6d60b7d585ea0fed6": "118a95d4a6ad43eaf2a2d569dcae95db",
".git/objects/0c/3ddc7904050b758c053e515002b12f6d31cfcd": "7ea6d2b2dda54ab0a667c71a22c26293",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/c2e9cd4ad2fcb282c4ddc54588fc1bf07bf313": "39f767de7ce792eca5b408d7aa3d777e",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/69/305e9025f30951d85b2ebc3f0d7a83abda7e9c": "c157e29dba7bb350d73a78acea5e7e81",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/e49260b4ee19b6b8d6bd5f320219abf6e07058": "929f08898385646977dabc0fdc726509",
".git/objects/58/0b1a127d2f5d58e4a7f101fc247fa0a1b2973b": "09089167b5012a33a3dece1edc08dfbe",
".git/objects/0b/4451d9c727c6f1015f5329b113580145ad8da1": "df0627aa2f73cd3cd226c3dead9e82cb",
".git/objects/0e/dba062692ab0156e19e4e26855ce293bfd7afa": "25002030cc398b102b5152c3752ae61b",
".git/objects/0e/0b42c3f9b89ba599b9d65430d90922b6e99570": "6349ec826bf5cf72e794f4e548fa730d",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/c117740cf492c7d66887a8e9a1deec798e3865": "4ff8317c0bb5121776c8b0a2b58531af",
".git/objects/d0/54d3e87f82575f9ea848ce448c013188d5e48b": "98855cb9dadcc14f9ab4fb92ee1ba8cf",
".git/objects/a5/205a2e8a6ab9b5c4f197ae9bbdfcc926c59d08": "72fd36b1af22d8dfcba300e4009bce04",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/9f13f3e0bb618a3a506c138ebf615bddb31ee4": "5943611389a14efa048d3963fe25d7c5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/2f6d96eb17bc0e6cc1bbd58ad7b817526c7ca9": "8d437d0c3fa05c123db900fbf267cbea",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1f/173a48a3e851a9c0a7589760b5c544f20635dd": "311c3931aaf9a59d13a565b92daed1ab",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/13a0a1720f8e5de3d4972fe753e31eab112ede": "6002cbb9588716db20bcd7963ddc335a",
".git/objects/74/aaca35802d33902c8cc66aedfcdbe8dff84ab4": "7833e725b4493aa17d05a6f65e8a26da",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/ce88b4b2e7cdddfede778c5aa39bd368ceaecf": "bf1892a7160fe6c9269e1c7f61fc741e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/afc2cbcdcb70384f247450d1d0972eb2934d57": "6a3945b1ce7f62b77fd942f023203bda",
".git/objects/09/b643f75ba6f88edcd56be9f6e6a2647631980b": "ce75ea11762d6882f0101dc24e69c046",
".git/objects/91/7355bd718409b6ae42c5860688bcd7a85f6062": "dc657afbb0d5e3d594a48a9fff546b5e",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/96/f91e1adf74f4ce934ab87b40cded8d9c1328eb": "0dfe128f0d6bcbcd4d379edfcefc271f",
".git/objects/3a/64c7e000e7f2bbc8e8dd5ff75e64ca70d98961": "4e289682a4fac86b034be7ba6e7e2ddc",
".git/objects/5b/1541418e39c5b58f6699fea1d59a0c60a189be": "fb1a26a81d5ef6938018c49b97187a00",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/a539f10b0bbbaa4320a87ffdfcc3f64f38945c": "64f3050671fe7b341bea40d7cba6aee0",
".git/objects/64/d4d40a439586b070e1b930c2a07d68f895efa3": "038600f5d559928ddabac9ce2c024265",
".git/objects/90/900ca31b9ab5047745f2c49257915a9053320b": "69c10d90e4be2c8b71ccbd154e8c6a0d",
".git/objects/d3/8c39736e7a9da7b74be9dc8f91abd76ee4187c": "081482645db933ec59f40a0aadf02167",
".git/objects/ba/003faae25717e271745740ee697c698d2ee08c": "e5256c1bec4c863d0406116d8d83e858",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/e923e3259dfa1fde7f4e6f5fd2597e3c7ed6b6": "a2c11f83f09466bed1798273f60e77f6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/7a62de4819b593ac52ba477a7131c6fb6eb617": "c48a259b6056461feb030536fc3f3d9b",
".git/objects/c3/e32100049d0334703c24f353a2e12cf1d0442e": "c2d9b146dbd38eb2c9a419309606f738",
".git/objects/c4/c7b0a68f48088c9d91137e672e8c8597feb4ac": "b61aa7ae11c2ee64f4d3756b497c7d8b",
".git/objects/f9/70af5f1344c532cb12c09cb369bfff10cb1b6d": "9a1bb665cc6877dc06359f0e8e7cf962",
".git/objects/f0/fa90de9c1e1d939b96968ed5a64752cf6d0588": "a80c938b34e0f06a89538d58577ab2c8",
".git/objects/ff/9bfd2407d4088c306e3f65b985b128afad5bab": "d0057eb469bb6ce1f5a0e49ac6a84bbb",
".git/objects/e7/1809e9a295583c2766364d675d988b2bbb311b": "cb97df2b2e22f52f343ee674c6691211",
".git/objects/cb/e12bdf9dfa40e1bb4d095c4996e76a84818628": "737566ce07b639836936ac75aaa67947",
".git/objects/ce/5aefbb1f3b945c87d8e4354c54a75fe3be83be": "3ff42942eb8b2c722629d82e7a07cbc6",
".git/objects/ce/c2b8dca28dff1a46837b1726a3bdb67219b23b": "b2116c677f530ef5d0cca93bf042f805",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/7654f02be4635f500e68b650ed79575572328f": "60225b16797c6af30d553d9cdd593026",
".git/objects/23/4c93888e38641c7f31148ecbc9b25de13b708d": "45f6f0ef918ac2ea0f8b4f8f3f1a1287",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/68ab79f5f7382838b41257d496a742d60be033": "1b449275478cf9478516ded4f020d41b",
".git/objects/85/6008adffe77309068768fdd18d07a9ea03c18d": "045563d9633bf4221ca6c7fbc34ea026",
".git/objects/2e/ff94d110f0ce7744ea56ded496a6a0ca9b94f0": "37343ddab261eeacade795fd5da9e592",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd581cdeed20823c31afea54ab684294",
".git/logs/refs/heads/main": "efa1657f96b514b21a3efcae41142681",
".git/logs/refs/remotes/origin/main": "467009c6d2d1f5855dba0bd144e827a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6baa08bfd40c523fa32867110f498360",
".git/refs/remotes/origin/main": "6baa08bfd40c523fa32867110f498360",
".git/index": "9efc64f2bbd5ebb52c42c46adf38f93f",
".git/COMMIT_EDITMSG": "d6b80b02d94a7837e839a40de1b67a28",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "341b704e75b81ca76ab5edcc90ffee91",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
