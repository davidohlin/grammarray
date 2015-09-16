'use strict';
var grammarray = require('./');
var test = require('ava');

var arr = ['Marvin Gaye', 'Led Zeppelin', 'Biggie'];

test(function (t) {
	t.same(grammarray(arr), 'Marvin Gaye, Led Zeppelin and Biggie');
	t.same(grammarray(arr, {
		before: '~~ ',
		delimiter: ' and ',
		lastDelimiter: 'but also',
		after: ' ~~'
	}), '~~ Marvin Gaye and Led Zeppelin but also Biggie ~~');
	t.is(typeof grammarray(arr), 'string');
	t.end();
});
