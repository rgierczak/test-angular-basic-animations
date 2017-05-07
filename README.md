# test-angular-basic-animations

> The application shows basic features of Angular Animations module.

## Installation

```
$ npm install
```

## Usage

```
$ npm run start
```

Run the project in your browser

```
localhost:4200
```

## Enable Angular Animations module

The Angular Animations module was built basic on [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
Since the Web Animations API is not supported yet in most of the modern browsers, it is required to use polyfills, provided by Angular CLI.

To enable Angular Animations do the following steps:

- `npm install --save web-animations-js`,
- `npm install --save @angular/animations`,
- uncomment in `polyfills.js` line responsible for importing `web-animations-js`,
- import `BrowserAnimationsModule` in `app.module.ts`

## Which Properties are Animatable ?

Not every CSS property may be animated. The list of animatable properties is available [here](https://www.w3.org/TR/css3-transitions/#animatable-properties).
