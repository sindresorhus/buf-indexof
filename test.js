import test from 'ava';
import m from './';

test(t => {
	// https://github.com/iojs/io.js/blob/8bf878d6e5ac0faa3871cddd5dcc423ae4d3d45a/test/parallel/test-buffer-bufIndexof.js
	const b = new Buffer('abcdef');
	const buf_a = new Buffer('a');
	const buf_bc = new Buffer('bc');
	const buf_f = new Buffer('f');
	const buf_z = new Buffer('z');
	const buf_empty = new Buffer('');

	t.is(m(b, 'a'), 0);
	t.is(m(b, 'a', 1), -1);
	t.is(m(b, 'a', -1), -1);
	t.is(m(b, 'a', -4), -1);
	t.is(m(b, 'a', -b.length), 0);
	t.is(m(b, 'a', NaN), 0);
	t.is(m(b, 'a', -Infinity), 0);
	t.is(m(b, 'a', Infinity), -1);
	t.is(m(b, 'bc'), 1);
	t.is(m(b, 'bc', 2), -1);
	t.is(m(b, 'bc', -1), -1);
	t.is(m(b, 'bc', -3), -1);
	t.is(m(b, 'bc', -5), 1);
	t.is(m(b, 'bc', NaN), 1);
	t.is(m(b, 'bc', -Infinity), 1);
	t.is(m(b, 'bc', Infinity), -1);
	t.is(m(b, 'f'), b.length - 1);
	t.is(m(b, 'z'), -1);
	t.is(m(b, ''), -1);
	t.is(m(b, '', 1), -1);
	t.is(m(b, '', b.length + 1), -1);
	t.is(m(b, '', Infinity), -1);
	t.is(m(b, buf_a), 0);
	t.is(m(b, buf_a, 1), -1);
	t.is(m(b, buf_a, -1), -1);
	t.is(m(b, buf_a, -4), -1);
	t.is(m(b, buf_a, -b.length), 0);
	t.is(m(b, buf_a, NaN), 0);
	t.is(m(b, buf_a, -Infinity), 0);
	t.is(m(b, buf_a, Infinity), -1);
	t.is(m(b, buf_bc), 1);
	t.is(m(b, buf_bc, 2), -1);
	t.is(m(b, buf_bc, -1), -1);
	t.is(m(b, buf_bc, -3), -1);
	t.is(m(b, buf_bc, -5), 1);
	t.is(m(b, buf_bc, NaN), 1);
	t.is(m(b, buf_bc, -Infinity), 1);
	t.is(m(b, buf_bc, Infinity), -1);
	t.is(m(b, buf_f), b.length - 1);
	t.is(m(b, buf_z), -1);
	t.is(m(b, buf_empty), -1);
	t.is(m(b, buf_empty, 1), -1);
	t.is(m(b, buf_empty, b.length + 1), -1);
	t.is(m(b, buf_empty, Infinity), -1);
	t.is(m(b, 0x61), 0);
	t.is(m(b, 0x61, 1), -1);
	t.is(m(b, 0x61, -1), -1);
	t.is(m(b, 0x61, -4), -1);
	t.is(m(b, 0x61, -b.length), 0);
	t.is(m(b, 0x61, NaN), 0);
	t.is(m(b, 0x61, -Infinity), 0);
	t.is(m(b, 0x61, Infinity), -1);
	t.is(m(b, 0x0), -1);

	t.throws(() => {
		m(b, () => {});
	});
	t.throws(() => {
		m(b, {});
	});
	t.throws(() => {
		m(b, []);
	});
});
