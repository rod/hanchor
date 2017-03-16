# hanchor [![Build Status](https://travis-ci.org/rod/hanchor.svg?branch=master)](https://travis-ci.org/rod/hanchor)

> Autogenerate links to header tags from header text


## Install

```
$ npm install --save hanchor
```


## API

### hanchor(scope, [options])

#### scope

Type: `object`, `string`, Default: `'body'`

The DOM element that header linking is scoped to.

#### options.content

Type: `string`, Default: `#`

The content of the header tag link.

#### options.className

Type: `string`, Default: `false`

Class to be assigned to the header tag links.

#### options.position

Type: `string`, Default: `beforeend`

Position the link `beforebegin`, `afterbegin`, `beforeend` or `afterend` in reference to the the header tag.


## License

MIT © [Rodney Dennis](http://rod.today)
