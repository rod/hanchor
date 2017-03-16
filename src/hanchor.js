//! hanchor
//! version : 2.0.0
//! authors : Rodney Dennis
//! license : MIT
//! https://github.com/rod/hanchor

const formatScope = (data) => {
  const type = typeof data;

  if (Array.isArray(data) || type === 'boolean' || type === 'number') {
    throw new TypeError('Context must be of type string or object', 'hanchor.js');
  }

  if (type === 'string') {
    return document.querySelector(data);
  }

  return data;
};

const getClassName = (string) => {
  if (typeof string === 'string' && string !== null) {
    return `class='${string}'`;
  }

  return '';
};

const slug = text => (
  text.toString().toLowerCase()
    .replace(/\s+/g, '-')         // Replace spaces with -
    .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
    .replace(/\-\-+/g, '-')       // Replace multiple - with single -
    .replace(/^-+/, '')           // Trim - from start of text
    .replace(/-+$/, '')           // Trim - from end of text
);

const hanchor = (scope, { content = '#', className = false, position = 'beforeend' } = {}) => {
  if (!scope) return;

  const htags = formatScope(scope).querySelectorAll('h1, h2, h3, h4, h5, h6');

  htags.forEach((el) => {
    const h = {
      el,
      slug: slug(el.innerHTML),
    };

    h.el.setAttribute('id', h.slug);

    const a = `<a href='#${h.slug}' ${getClassName(className)}>${content}</a>`;

    h.el.insertAdjacentHTML(position, a);
  });
};

export const init = (scope, config = {}) => hanchor(scope, config);
