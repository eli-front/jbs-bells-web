'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2abcb21b5177fd247d8cbd614556714f",
"index.html": "c19892b2dc57829c650489405221a56e",
"/": "c19892b2dc57829c650489405221a56e",
"main.dart.js": "c5185099e2c9bf3be5be0134f254eb86",
"README.md": "f01e42ea4551bf94fdf8d88208c28209",
"favicon.png": "71d0fe6e8bd9cf06818a368841e00a7d",
"icons/icon-192.png": "cfa629c81d26e2881be924a6663c1d34",
"icons/icon-512.png": "54caddba49711381ff283f857a8ea0b9",
"manifest.json": "a8bdc83d4d045272c7119651a95b9085",
".git/ORIG_HEAD": "4e28a7af68ef25a761438394ec99698b",
".git/config": "13dbb7a247b0e0be5d158b88bfc2b6d8",
".git/objects/0d/9bee07f827d3579be2060df92d8eaf211d1639": "4f2623bbccf2461888890e6eeede0e96",
".git/objects/92/046111a485c8b90bbbd672b787c4bd122a6252": "ecb2228086a62188bf84641f192a7221",
".git/objects/6a/2411ada266c2d04a998a58127736a37e15bade": "d5e2fe0f6b2f0ddae47ded4abedf7a5c",
".git/objects/69/6d06782f10265e8970cb6fcd96084dac0e218d": "dcc1a057bcc234522ffbc3d63ed31f98",
".git/objects/58/07879e7162e3c3ea42e447ffc2d6d1ecd22ee6": "77caaf643f065734eff3d6f398badfc1",
".git/objects/0e/b6ad4aadc13306095ffbdfd4128c3d87c67311": "69e3a21ccb6417ad9013c3852a3429c5",
".git/objects/9d/80e9c60429eb31032156b1e51fc61d822419e3": "14934af5a430eeda9f43a8fffc28b2f6",
".git/objects/02/b0cea5753521b7cfbd4f231a07700aa65ebcd4": "e39d09e2c1b9b7b8844b727b6b28677b",
".git/objects/b2/663a1b0e787bba4ddc55459cc1a39c521792f5": "2137f5e64b501c63287a9fb1391a9058",
".git/objects/b2/c13815eb8cc529d90a10541c0daf265b8a697d": "7467fea73ebf1400680eaf6e1e2c9607",
".git/objects/bb/30163787db5953192921666ada94fe06f8a0b5": "a42251baf5870878860d39812ac2e88b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/f00baf07d47fb3e412263441cbb17f6927ee2d": "b3891d9900fa422d76c76090b928502d",
".git/objects/c7/647849e15c5ae5413c6e2f96427a383e007b30": "3a7db47922b571c2ba15747c59ad5e0c",
".git/objects/c0/a562d22d44437daf0f8630ba4b99726b317933": "c5ef553b8a4f893abbcde42334f766ad",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/ecfdbaeb400ca1f0adfdbdfccf7e90bfbd5e51": "d4757d611ff3cb1a14040439be30329b",
".git/objects/ca/3c4c0e31feeb8c3420ab5cb32385c5e4b680e9": "fb17e46d6f8abbf728de1268f605b0d9",
".git/objects/e4/2753bdaad1eedb5ed035bb16a87b6484eea576": "98f0bc4841f0e5347d12c7ec1d8ca69c",
".git/objects/87/9099c4d9d0f7d9ddf3cc91a625afe1041d9b8e": "1dcbdbf0eb67286c81ebad8175d7d5f1",
".git/objects/1a/930863d317c06df8fb19ad731269c9f47cff6e": "611ae3639f4bb0e6bbd80dfba9e3abbe",
".git/objects/8f/c13fc6a25f2e32ab8e69ba178c7491ba5c6ecf": "926cc93ab98e8b043547478d648d74af",
".git/objects/43/9138ca2bce7ea76cd4a9a424e3e42b33d34373": "a0e355d8e8026090120b90889d92b43d",
".git/objects/9f/a36980309796ee271046fb492422d458335a05": "10a87d0f7483c8435f560c673f9f21a9",
".git/objects/91/bd3a31a456e591975a28859262b137c7155540": "da89747b7e420043f22d220bb6a1e27b",
".git/objects/99/724b65a41550d0553860b92233a779bbb03451": "dfa61eb8362e0ad702c71b42fbd3b2dd",
".git/objects/a0/daca5373af1ac8139b9afc75b8997a954ead24": "2b1ad3fc9bb0044525cf1c5962fb6331",
".git/objects/b8/2412ecfad3c2d5faf0d4e0be87c1c892f75812": "04695641a371557f11a79172f9ea34d5",
".git/objects/aa/6966fcb1b132479c357c4eb314cd477ae8acf4": "8b76a2153d27f25333983c00b5d3c97d",
".git/objects/aa/b3916fa4c9f1be27beb21d96add5a1dcf524f3": "2de8a6de29a53dfb993715f4d60c99a7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/8a6f9147d42854eb78d910de3a1f9622d08b78": "44d53cec3d935c8b34a135d287b5dc9c",
".git/objects/e1/e39c475a3dbbc0578d0266c56ad4cf5a70d188": "a0da147a42e25beec9fa0a77e7cd0809",
".git/objects/cc/ff2bf4033a30d4f191618613b2d887e16c3d02": "1164a48a432ec2719b6fe4a7b5828d2d",
".git/objects/e6/3ff47976734693af42d995a39d9df813deaafc": "1c3fd2d4beb205cb3e22301593e705ae",
".git/objects/e6/38a16b4aa7ffb1d68282cc4136d6bc708f862f": "1dd875641431415d0da229e8225286c9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ff/9cd3a7556bbe56ded242b6570886e02cc6d12a": "9b33c7b1dd1c4d718d77858c92da367c",
".git/objects/c2/cd698a43c64285ad9ee6486596684477113a12": "66774adcb77290e041cf80341045058d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/23/0025fe1e9bfa15542c23cafc3f0722aeb4bfed": "56581ba033b5d9cf466f455764600db9",
".git/objects/1d/d333903131a9a3ada8afd7bdbcfc65e79c4a98": "b9bf46d7095697aeaf3c7ea0a1aee8fe",
".git/objects/1c/6d899508afa6a3cda89ff9365b2ebb1dbd42f6": "d06b12509ba8ac3c901e70e51048fad1",
".git/objects/78/d74293615cc090a5b40c6a07c16c9565d79dc0": "7127cca6dec0717117d299cf1ea7785e",
".git/objects/22/0cce41f7ddf11e4279cc707096a02116c48928": "37b7956f8394f5c51c63d77540870e16",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a6c692ee4316007c2f3700e8f082440",
".git/logs/refs/heads/main": "6dfdd44de964aec3d6785936a22e9b3a",
".git/logs/refs/remotes/origin/master": "92924efd23bf1518477997015874e0f4",
".git/logs/refs/remotes/origin/main": "05bf58b71bc152a1fbe2b02a97d43313",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "642c6a993f7b8dea1885e755c9855e6e",
".git/refs/remotes/origin/master": "126efafa170b4931a5a22462bbea96f3",
".git/refs/remotes/origin/main": "642c6a993f7b8dea1885e755c9855e6e",
".git/index": "effbcd4f10ae84e8d2eb372050d2346b",
".git/COMMIT_EDITMSG": "96e0e4710b6531fe10cb8d081c433e97",
".git/FETCH_HEAD": "e53e0ee13798fd339b056daf626f924f",
"assets/AssetManifest.json": "3f03897248b603c32d77a9f4c4c931a2",
"assets/NOTICES": "6fb5ebb0fe2a740b1fcbc64344e07e9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/data/basic.ics": "e87a4aefea68011362de956fff982148",
"assets/data/bell-schedule.csv": "794b4872e9ab6726d427702b387554a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
