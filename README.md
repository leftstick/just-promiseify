just-promiseify
=====================
[![NPM version][npm-image]][npm-url]
![][david-url]
![][travis-url]
![][dt-url]
![][license-url]

It's a very simple library to convert callback-based flow into Promise style

> `just-promiseify` can be used in both `node` and `browser` env.

## Installation

```bash
npm install just-promiseify --save
```

## Usage

```javascript
var promiseify = require('just-promiseify');
var fs = require('fs');

var readFile = promiseify(fs.readFile);

readFile(txt, 'utf8')
    .then(function(data) {
        console.log('The file content is',data);
    })
    .catch(function(err){
        console.error('Error', err);
    });
```


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/just-promiseify/master/LICENSE)

[npm-url]: https://npmjs.org/package/just-promiseify
[npm-image]: https://badge.fury.io/js/just-promiseify.png
[travis-url]:https://api.travis-ci.org/leftstick/just-promiseify.svg?branch=master
[david-url]: https://david-dm.org/leftstick/just-promiseify.png
[dt-url]:https://img.shields.io/npm/dt/just-promiseify.svg
[license-url]:https://img.shields.io/npm/l/just-promiseify.svg
