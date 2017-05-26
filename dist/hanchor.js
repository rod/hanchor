/*!
 * Hanchor v1.0.8
 * https://github.com/rod/hanchor
 *
 * Copyright (c) 2017 Rodney Dennis
 * Licensed under the MIT license
 */

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.hanchor = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var formatScope = function formatScope(data) {
    var type = typeof data === 'undefined' ? 'undefined' : _typeof(data);

    if (Array.isArray(data) || type === 'boolean' || type === 'number') {
      throw new TypeError('Context must be of type string or object', 'hanchor.js');
    }

    if (type === 'string') {
      return document.querySelector(data);
    }

    return data;
  };

  var getClassName = function getClassName(string) {
    if (typeof string === 'string' && string !== null) {
      return 'class=\'' + string + '\'';
    }

    return '';
  };

  var slug = function slug(text) {
    return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '');
  }; // Trim - from end of text

  var hanchor = function hanchor(scope) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$content = _ref.content,
        content = _ref$content === undefined ? '#' : _ref$content,
        _ref$className = _ref.className,
        className = _ref$className === undefined ? false : _ref$className,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? 'beforeend' : _ref$position;

    if (!scope) return;

    var htags = formatScope(scope).querySelectorAll('h1, h2, h3, h4, h5, h6');

    htags.forEach(function (el) {
      var h = {
        el: el,
        slug: slug(el.innerHTML)
      };

      h.el.setAttribute('id', h.slug);

      var a = '<a href=\'#' + h.slug + '\' ' + getClassName(className) + '>' + content + '</a>';

      h.el.insertAdjacentHTML(position, a);
    });
  };

  var init = exports.init = function init(scope) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return hanchor(scope, config);
  };
});