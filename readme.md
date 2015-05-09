# buf-indexof [![Build Status](https://travis-ci.org/sindresorhus/buf-indexof.svg?branch=master)](https://travis-ci.org/sindresorhus/buf-indexof)

> io.js 1.5.0 (Node.js) [`buffer.indexOf()`](https://iojs.org/api/buffer.html#buffer_buf_indexof_value_byteoffset) ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method


## Install

```
$ npm install --save buf-indexof
```


## Usage

```js
var bufIndexof = require('buf-indexof');

bufIndexof(new Buffer('unicorn'), 'corn');
//=> 3
```


## API

See the [`buffer.indexOf()` docs](https://iojs.org/api/buffer.html#buffer_buf_indexof_value_byteoffset).

The only difference is that you pass in the buffer as the first argument instead of calling the `.indexOf()` method on the buffer instance.


## Related

- [buffer-equals](https://github.com/sindresorhus/buffer-equals) - Node.js 0.12 `buffer.equals()` ponyfill
- [buf-compare](https://github.com/sindresorhus/buf-compare) - Node.js 0.12 `Buffer.compare()` ponyfill


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
