'use strict';
var objectAssign = require('object-assign');

module.exports = function (arr, opts) {
	opts = objectAssign({
		before: '',
		delimiter: ', ',
		lastDelimiter: 'and',
		after: ''
	}, opts);

	var res;

	if (arr.length > 1) {
		var lastItem = arr.pop();
		res = opts.before + arr.join(opts.delimiter) + ' ' + opts.lastDelimiter + ' ' + lastItem + opts.after;
		return res;
	}

	res = opts.before + arr + opts.after;
	return res;
};
