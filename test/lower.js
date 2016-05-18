import test from 'ava';
import lower from '../lib/lower';

test('foo', t => {
	t.is(lower('FOO'), 'foo');
});

test('bar', t => {
	t.is(lower('BAR'), 'bar');
});

test('baz', t => {
	t.is(lower('BAZ'), 'baz');
});
