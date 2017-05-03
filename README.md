# test-angular-basic-animations

> ...

## Enable Angular Animations module

The Angular Animations module was built basic on Web Animations API.
Since the Web Animations API is not supported yet at the moment in most of the modern browsers, it is required to use polyfills provided by Angular CLI.

To enable Angular Animations do the following steps:

- `npm install --save web-animations-js`,
- `npm install --save @angular/animations`,
- uncomment in `polyfills.js` line responsible for importing `web-animations-js`,
- import `BrowserAnimationsModule` in `app.module.ts`
