<p align="center">
  <a href="https://angular2-pwa-8efb6.firebaseapp.com">
    <img alt="Angular 2 PWA" title="Angular 2 PWA" src="https://udemy-images.udemy.com/course/750x422/769390_7c69_3.jpg" width="220">
  </a>
</p>
<p align="center">
  This applications is built with 
  <a href="https://cli.angular.io">Angular 4</a> and 
  <a href="https://material.angular.io" >Angular material </a>
</p>

----

## Fast
   Service Worker to achieve faster load with and without a network.

## Responsive
   Responsive UI using  <a href="https://github.com/angular/flex-layout">Flex-Layout</a> that can be used to your mobile home   screen to    have a native feel.

## Progressive 
   [Lighthouse](https://github.com/GoogleChrome/lighthouse) score of 100/100.

## Offline Support

  Using Service Worker to load quickly and work offline.

* [`sw-precache`](https://github.com/GoogleChrome/sw-precache) is used to serve local static resources (App Shell) cache first.
* [`sw-toolbox`](https://github.com/GoogleChrome/sw-toolbox) is used to handle requests using the `networkFirst` strategy. If a request     fails, the app will fulfill the request from the cache. This means previously loaded pages will now work offline.
