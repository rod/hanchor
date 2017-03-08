# hanchor [![Build Status](https://travis-ci.org/rod/hanchor.svg?branch=master)](https://travis-ci.org/rod/hanchor)

> Create links to header tags


## Install

```
$ npm install --save hanchor
```


## API

### `hanchor([options])`

#### options
Type: `Object`
Default: `{}`

##### container

Type: `string`

Default: `body`

Selector of the element containing header tag links.

##### content

Type: `string`

Default `#`

The content of the header tag link.

##### class

Type: `string`

Default: `''`

Class to be assigned to the header tag links.

##### position

Type: `string`

Default: `afterbegin`

Position the link `beforebegin`, `afterbegin`, `beforeend` or `afterend` in reference to the the header tag.


## License

MIT © [Rodney Dennis](http://rod.today)
