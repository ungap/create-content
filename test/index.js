require('basichtml').init({});

var createContent = require('../cjs');
test();

if (typeof process === 'object') {
  delete require.cache[require.resolve('../cjs')];
  var proto = Object.getPrototypeOf(document.createElement('template'));
  delete proto.content;
  createContent = require('../cjs');
  test();
}

function test() {
  var content = createContent('<p>test</p>');
  var child = content.childNodes[0];
  console.assert(child.nodeName.toLowerCase() === 'p' && child.textContent === 'test');
  content = createContent('<td>test</td>');
  child = content.childNodes[0];
  console.assert(child.nodeName.toLowerCase() === 'td' && child.textContent === 'test');
  content = createContent('<rect>test</rect>', 'svg');
  child = content.childNodes[0];
  console.assert(child.nodeName.toLowerCase() === 'rect' && child.textContent === 'test');
}
