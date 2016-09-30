# buf-indexof [![Build Status](https://travis-ci.org/sindresorhus/buf-indexof.svg?branch=master)](https://travis-ci.org/sindresorhus/buf-indexof)

> Node.js [`buffer.indexOf()`](https://iojs.org/api/buffer.html#buffer_buf_indexof_value_byteoffset) [ponyfill](https://ponyfill.com)


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

- [buffer-equals](https://github.com/sindresorhus/buffer-equals) - Node.js `buffer.equals()` ponyfill
- [buf-compare](https://github.com/sindresorhus/buf-compare) - Node.js `Buffer.compare()` ponyfill


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
