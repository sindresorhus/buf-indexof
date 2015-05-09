'use strict';
var assert = require('assert');
var test = require('ava');
var bufIndexof = require('./');

test(function (t) {
	// https://github.com/iojs/io.js/blob/8bf878d6e5ac0faa3871cddd5dcc423ae4d3d45a/test/parallel/test-buffer-bufIndexof.js
	var b = new Buffer('abcdef');
	var buf_a = new Buffer('a');
	var buf_bc = new Buffer('bc');
	var buf_f = new Buffer('f');
	var buf_z = new Buffer('z');
	var buf_empty = new Buffer('');

	assert.equal(bufIndexof(b, 'a'), 0);
	assert.equal(bufIndexof(b, 'a', 1), -1);
	assert.equal(bufIndexof(b, 'a', -1), -1);
	assert.equal(bufIndexof(b, 'a', -4), -1);
	assert.equal(bufIndexof(b, 'a', -b.length), 0);
	assert.equal(bufIndexof(b, 'a', NaN), 0);
	assert.equal(bufIndexof(b, 'a', -Infinity), 0);
	assert.equal(bufIndexof(b, 'a', Infinity), -1);
	assert.equal(bufIndexof(b, 'bc'), 1);
	assert.equal(bufIndexof(b, 'bc', 2), -1);
	assert.equal(bufIndexof(b, 'bc', -1), -1);
	assert.equal(bufIndexof(b, 'bc', -3), -1);
	assert.equal(bufIndexof(b, 'bc', -5), 1);
	assert.equal(bufIndexof(b, 'bc', NaN), 1);
	assert.equal(bufIndexof(b, 'bc', -Infinity), 1);
	assert.equal(bufIndexof(b, 'bc', Infinity), -1);
	assert.equal(bufIndexof(b, 'f'), b.length - 1);
	assert.equal(bufIndexof(b, 'z'), -1);
	assert.equal(bufIndexof(b, ''), -1);
	assert.equal(bufIndexof(b, '', 1), -1);
	assert.equal(bufIndexof(b, '', b.length + 1), -1);
	assert.equal(bufIndexof(b, '', Infinity), -1);
	assert.equal(bufIndexof(b, buf_a), 0);
	assert.equal(bufIndexof(b, buf_a, 1), -1);
	assert.equal(bufIndexof(b, buf_a, -1), -1);
	assert.equal(bufIndexof(b, buf_a, -4), -1);
	assert.equal(bufIndexof(b, buf_a, -b.length), 0);
	assert.equal(bufIndexof(b, buf_a, NaN), 0);
	assert.equal(bufIndexof(b, buf_a, -Infinity), 0);
	assert.equal(bufIndexof(b, buf_a, Infinity), -1);
	assert.equal(bufIndexof(b, buf_bc), 1);
	assert.equal(bufIndexof(b, buf_bc, 2), -1);
	assert.equal(bufIndexof(b, buf_bc, -1), -1);
	assert.equal(bufIndexof(b, buf_bc, -3), -1);
	assert.equal(bufIndexof(b, buf_bc, -5), 1);
	assert.equal(bufIndexof(b, buf_bc, NaN), 1);
	assert.equal(bufIndexof(b, buf_bc, -Infinity), 1);
	assert.equal(bufIndexof(b, buf_bc, Infinity), -1);
	assert.equal(bufIndexof(b, buf_f), b.length - 1);
	assert.equal(bufIndexof(b, buf_z), -1);
	assert.equal(bufIndexof(b, buf_empty), -1);
	assert.equal(bufIndexof(b, buf_empty, 1), -1);
	assert.equal(bufIndexof(b, buf_empty, b.length + 1), -1);
	assert.equal(bufIndexof(b, buf_empty, Infinity), -1);
	assert.equal(bufIndexof(b, 0x61), 0);
	assert.equal(bufIndexof(b, 0x61, 1), -1);
	assert.equal(bufIndexof(b, 0x61, -1), -1);
	assert.equal(bufIndexof(b, 0x61, -4), -1);
	assert.equal(bufIndexof(b, 0x61, -b.length), 0);
	assert.equal(bufIndexof(b, 0x61, NaN), 0);
	assert.equal(bufIndexof(b, 0x61, -Infinity), 0);
	assert.equal(bufIndexof(b, 0x61, Infinity), -1);
	assert.equal(bufIndexof(b, 0x0), -1);

	assert.throws(function () {
		bufIndexof(b, function () {});
	});
	assert.throws(function () {
		bufIndexof(b, {});
	});
	assert.throws(function () {
		bufIndexof(b, []);
	});

	t.end();
});
