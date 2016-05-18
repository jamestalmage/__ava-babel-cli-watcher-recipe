import test from 'ava';
import upper from '../lib/upper';

test('foo', t => {
	t.is(upper('foo'), 'FOO');
});

test('bar', t => {
	t.is(upper('bar'), 'BAR');
});
