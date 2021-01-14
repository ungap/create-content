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
  content = createContent('<p>a</p><p>b</p>');
  console.assert(content.childNodes.length === 2 && content.childNodes[1].textContent === 'b');
  content = createContent('<td>test</td>');
  child = content.childNodes[0];
  console.assert(child.nodeName.toLowerCase() === 'td' && child.textContent === 'test');
  content = createContent('<rect x=1 y=2 /><rect x=1 y=2 />', 'svg');
  child = content.childNodes[0];
  console.assert(child.nodeName.toLowerCase() === 'rect' && child.getAttribute('x') == 1);
  console.assert(content.childNodes.length == 2);
  content = createContent('<ul>\n  <li>a</li>\n  <li>b</li></ul>', 'html', true);
  console.assert(content.childNodes[0].innerHTML === '<li>a</li><li>b</li>');
}
