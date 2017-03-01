const hanchor = (config = {}) => {
  const htags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

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

    const a = `<a href="#${h.id}">#</a>`;

    h.el.insertAdjacentHTML('beforeend', a);
  });
};

module.exports = (() => {
  hanchor();
})();
