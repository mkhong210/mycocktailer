// default 값으로 실행
const staticCacheName = "version-1"

const urlsToCache = [
	"/myown-cocktail/index.html",
	'/myown-cocktail/static/js/bundle.js',
	'/myown-cocktail/manifest.json'
]

// 추가된 캐시 
const dynamicCache = "dynamicCache";

const limitCacheSize = (name, size) => {
	caches.open(name).then(cache => {
		cache.keys().then(keys => {
			if (keys.length > size) {
				cache.delete(keys[0]).then(limitCacheSize(name, size))
			}
		})
	})
}

this.addEventListener('install', (event) => {
	// console.log('install');

	// 비동기
	event.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			console.log('Opend Cache')
			return cache.addAll(urlsToCache);
		})
	)
})

// dynamic 파일 생성 후 저장?
this.addEventListener('fetch', event => {
	// console.log('fetch');
	event.respondWith(
		caches.match(event.request).then(cacheRes => {
			return cacheRes || fetch(event.request).then(fetchRes => {
				return caches.open(dynamicCache).then(cache => {
					cache.put(event.request.url, fetchRes.clone());
					// 캐시가 쌓이더라도 10개 이상 쌓이지 않음 
					limitCacheSize(dynamicCache, 10);
					return fetchRes;
				})
			})
		}).catch(() => {
			if (event.request.url.indexOf('.html') > -1) {
				return caches.match('/fallback.html')
			}
		})
	)
})

// 파일 정리 
this.addEventListener('activate', event => {
	// console.log('activate');

	// 비동기
	event.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(keys
				.filter(key => key !== staticCacheName)
				.map(key => caches.delete(key))
			)
		})
	)
})