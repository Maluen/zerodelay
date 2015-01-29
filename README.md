# zerodelay.js
Defer JavaScript functions by grouping them in concurrently-executing categories.

#### NOTE
This micro-library uses [setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window.setImmediate) for postponing execution of JavaScript functions, when this is missing, it fallbacks to the not really immediate setTimeout(fn, 0) method, thus, you are highly suggested to include a [setImmediate polyfill](https://github.com/YuzuJS/setImmediate) before it for serious usage.

