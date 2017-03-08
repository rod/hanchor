export default function hanchor({
  container = 'body',
  content = '#',
  classname = '',
  linkPosition = 'beforeend',
} = {}) {
  const htags = document.querySelector(container).querySelectorAll('h1, h2, h3, h4, h5, h6');
  htags.forEach((el) => {
    const h = {
      el,
      id: el.innerHTML
            .replace(/[^\w\s]/g, '')
            .trim().split(/\s/g)
            .join('-')
            .toLowerCase(),
    };
    h.el.setAttribute('id', h.id);
    const a = `<a href="#${h.id}" class="${classname}">${content}</a>`;
    h.el.insertAdjacentHTML(linkPosition, a);
  });
}
