'use strict';
var grammarray = require('./');
var test = require('ava');

var arr = ['Marvin Gaye', 'Led Zeppelin', 'Biggie'];

test(function (t) {
	t.same(grammarray(arr), 'Marvin Gaye, Led Zeppelin and Biggie');
	t.is(typeof grammarray(arr), 'string');
	t.end();
});
