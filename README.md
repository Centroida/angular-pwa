<p align="center">
  <a href="https://angular2-pwa-8efb6.firebaseapp.com">
    <img alt="Angular 2 PWA" title="Angular 2 PWA" src="https://udemy-images.udemy.com/course/750x422/769390_7c69_3.jpg" width="220">
  </a>
</p>
<p align="center">
  This application is built with 
  <a href="https://cli.angular.io">Angular 4</a> and 
  <a href="https://material.angular.io" >Angular material </a>
</p>

----

## What's included
 - Faster load speeds and offline support using a service worker.
 - Caching server-side data using a service worker.
 -  Responsive UI using  <a href="https://github.com/angular/flex-layout">Flex-Layout</a> that can be used to your mobile home screen to    have a native feel.
 - [Lighthouse](https://github.com/GoogleChrome/lighthouse) score of 100/100.
 -  Web App Manifest that allows you to add to your homescreen.


### [Demo](https://angular2-pwa-8efb6.firebaseapp.com/)

## Service worker packages

* [`sw-precache`](https://github.com/GoogleChrome/sw-precache) is used to serve local static resources cache first.
* [`sw-toolbox`](https://github.com/GoogleChrome/sw-toolbox) is used to handle requests using the `networkFirst` strategy. If a request     fails, the app will fulfill the request from the cache. This means previously loaded pages will now work offline.
  
## Contributors

 * [Taulant Disha]()
 * [Svetlin Kozhuharov]()
 * [Hristo Georgiev]()
 
--- 

  **NAME:**    | NodeJS | TypeScript | Angular CLI | Angular | Angular Material
  ------------ | ------ | ---------- | ----------- | ------- | ----------------
  **VERSION:** | `7.8`  | `2.2`      | `1.x`       | `4.0`   | `2.0.0-beta2`

## Initial Setup

 1. Download and install the appropriate version (_see above_) of [NodeJS](https://nodejs.org/) from:
    https://nodejs.org/en/download/releases/

 1. Install [TypeScript](https://www.typescriptlang.org/),
    [Typings](https://github.com/typings/typings) and 
    [Angular CLI](https://cli.angular.io/):
    ```bash
    npm install -g typescript
    npm install -g typings
    npm install -g @angular/cli@latest
    ```

## Coding Guidelines

* [TypeScript coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
* [Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)


### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

> **NOTE:** The app will automatically reload if you change any of the source files.

### Code Scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.

### Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further Help

To get more help on the Angular CLI use `ng help` or go check out the 
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
