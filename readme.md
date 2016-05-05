# grammarray [![Build Status](https://travis-ci.org/davidohlin/grammarray.svg?branch=master)](https://travis-ci.org/davidohlin/grammarray)

> Array to a better string.


## Install

```
$ npm install --save grammarray
```


## Usage

```js
const grammarray = require('grammarray');
const arr = ['Marvin Gaye', 'Led Zeppelin', 'Bigge'];

grammarray(arr);
//=> 'Marvin Gaye, Led Zeppelin and Biggie'

grammarray(arr, {
	before: '~~ ',
	delimiter: ' and ',
	lastDelimiter: 'but also',
	after: ' ~~'
});
//=> '~~ Marvin Gaye and Led Zeppelin but also Biggie ~~'
```

## License

MIT © [David Öhlin](http://davidohlin.se)
