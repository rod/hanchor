'use strict';

var hanchor = function hanchor() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var htags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  htags.forEach(function (el) {
    var h = {
      el: el,
      id: el.innerHTML.replace(/[^\w\s]/g, '').trim().split(/\s/g).join('-').toLowerCase()
    };

    h.el.setAttribute('id', h.id);

    var a = '<a href="#' + h.id + '">#</a>';

    h.el.insertAdjacentHTML('beforeend', a);
  });
};

module.exports = function () {
  hanchor();
}();
