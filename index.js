'use strict';
var objectAssign = require('object-assign');

module.exports = function (input, opts) {
	opts = objectAssign({
		before: '',
		delimiter: ', ',
		lastDelimiter: 'and',
		after: ''
	}, opts);

	var arr = input.slice();

	if (arr.length > 1) {
		var lastItem = arr.pop();
		return opts.before + arr.join(opts.delimiter) + ' ' + opts.lastDelimiter + ' ' + lastItem + opts.after;
	}

	return opts.before + arr + opts.after;
};
