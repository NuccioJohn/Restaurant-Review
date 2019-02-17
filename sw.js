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
//console.log(filesCahce);


//Adding a listener to the worker itself
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll(filesCahce);
		})
	);
});

//The logic below will check the cache and then fetch the data if it doesnt exist

self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response) {
			if (response) { //THis will be true if the response is successful and return the response
				return response;
			}
			else {
					console.log('ERROR: in cache fetch');
					return fetch(e.request)
							.then(function(response) {
								let response2 = response.clone();
								caches.open('v1').then(function(cache) {
									if (!response2.ok){
										throw new TypeError('Bad response status');
										console.log("response2 not has an error")
									}
									cache.put(e.request, response2);
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