'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hanchor;
function hanchor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$container = _ref.container,
      container = _ref$container === undefined ? 'body' : _ref$container,
      _ref$content = _ref.content,
      content = _ref$content === undefined ? '#' : _ref$content,
      _ref$classname = _ref.classname,
      classname = _ref$classname === undefined ? '' : _ref$classname,
      _ref$linkPosition = _ref.linkPosition,
      linkPosition = _ref$linkPosition === undefined ? 'beforeend' : _ref$linkPosition;

  var htags = document.querySelector(container).querySelectorAll('h1, h2, h3, h4, h5, h6');
  htags.forEach(function (el) {
    var h = {
      el: el,
      id: el.innerHTML.replace(/[^\w\s]/g, '').trim().split(/\s/g).join('-').toLowerCase()
    };
    h.el.setAttribute('id', h.id);
    var a = '<a href="#' + h.id + '" class="' + classname + '">' + content + '</a>';
    h.el.insertAdjacentHTML(linkPosition, a);
  });
}
