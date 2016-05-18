'use strict';
export function foo(str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};

	return `${str} & ${opts.postfix || 'rainbows'}`;
}

export default foo;
