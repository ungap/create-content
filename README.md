# createContent

A cross browser utility to create HTML or SVG runtime content, an lightweight alternative to what a [HTMLTemplateElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement) polyfill could do.

```js
// createContent(markup[, type = 'html'])
const htmlContent = createContent('<td>any content</td>');
const svgContent = createContent('<rect x=1 y=2 />', 'svg');
```

  * CDN global utility via https://unpkg.com/@ungap/create-content
  * ESM via `import Map from '@ungap/create-content'`
  * CJS via `const Map = require('@ungap/create-content')`

[Live test](https://ungap.github.io/create-content/test/)
