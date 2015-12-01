just-promiseify
=====================
[![NPM version][npm-image]][npm-url]
![][david-url]
![][travis-url]

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


//you can customize the copying process
go('/tmp/file1.txt', '/tmp2/file2.txt', function(content){
    return content.replace('ABC', 'PLA');
});

//binary file will be copied directly no matter whether you provide a process function
go('/tmp/logo.png', '/tmp2/logo2.png');
```


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/just-promiseify/master/LICENSE)




[npm-url]: https://npmjs.org/package/just-promiseify
[npm-image]: https://badge.fury.io/js/just-promiseify.png
[david-url]: https://david-dm.org/leftstick/just-promiseify.png
[travis-url]:https://api.travis-ci.org/leftstick/just-promiseify.svg?branch=master
