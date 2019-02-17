console.log('Service Worker: Registered');
const filesCahce = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/data/restaurants.json',
]

//Addin the images to the cache
for(let i = 1; i < 11; i++){
	filesCahce.push('/img/' + i+ '.jpg');
}
console.log(filesCahce);


//Adding a listener to the worker itself
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll(filesCahce);
		})
	);
});

self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.amtch(e.request).then(function(response) {
			if (response) { //THis will be true if the response is successful and return the response
				return response;
			}
			else {
					console.log('ERROR: in cache fetch');
					return fetch(e.request)
							.then(function(response) {
								caches.open('v1').then(function(cache) {
									cache.put(e.request, clonedResponse);
								})
								return response;
							})
							.catch(function(err) {
								console.log(err);
							});
			}
		})
	);
});