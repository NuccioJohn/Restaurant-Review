# Restaurant Reviews: Stage 1
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I converted a static webpage to a mobile-ready web application. I was able to make the application responsive on different sized displays and accessible for screen reader use. I was also able to add service worker to begin the process of creating a seamless offline experience for your users. The service worker seems to work fine, but throws some errors due to certain chrome extensions. I am hoping to get feedback on my Service Worker before the term ends. 

### Criteria - Specifications

#All content is responsive and displays on a range of display sizes.

#Content should make use of available screen real estate and should display correctly at all screen sizes.

#An image's associated title and text renders next to the image in all viewport sizes.

# Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.

# On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

#All content-related images include appropriate alternate text that clearly describes the content of the image.

#Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

#Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

# When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.



### CSS and Style Sheet

I implemented @media queries and felx box to appropriatley get the application to scale correctly.

## Leaflet.js. Mapbox and how I replaced it with Google Maps:

I had an issue with Map Box and decided to replace it with Google Maps.

## JavaScript

I created a new file called sw.js and implemented the Service Worker in this file. I used these sites as reference as I had a difficult time implementing the service worker. 

https://classroom.udacity.com/nanodegrees/nd001/parts/b1808a20-5e71-4dd3-bbc1-4ae86beefd6d
https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/
https://css-tricks.com/serviceworker-for-offline/
https://developer.mozilla.org/en-US/docs/Web/API/Cache/put

