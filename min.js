/*! (c) Andrea Giammarchi - ISC */
var createContent=function(t){"use strict";var i="fragment",a="template",o="content"in l(a)?function(n){var t=l(a);return t.innerHTML=n,t.content}:function(n){var t=l(i),e=l(a),r=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(n)){var o=RegExp.$1;e.innerHTML="<table>"+n+"</table>",r=e.querySelectorAll(o)}else e.innerHTML=n,r=e.childNodes;return c(t,r),t};return function(n,t,e){var r=("svg"===t?function(n){var t=l(i),e=l("div");return e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+n+"</svg>",c(t,e.firstChild.childNodes),t}:o)(n);return e&&r.normalize(),r};function c(n,t){for(var e=t.length;e--;)n.appendChild(t[0])}function l(n){return n===i?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document);