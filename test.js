import test from 'ava';
import m from './';

const arr = ['Marvin Gaye', 'Led Zeppelin', 'Biggie'];

test(t => {
	t.is(typeof m(arr), 'string');
	t.is(m(arr), 'Marvin Gaye, Led Zeppelin and Biggie');
	t.is(m(arr, {
		before: '~~ ',
		delimiter: ' and ',
		lastDelimiter: ' but also ',
		after: ' ~~'
	}), '~~ Marvin Gaye and Led Zeppelin but also Biggie ~~');
});
