'use strict';

function indexOf(buf, val, byteOffset) {
	var match = -1;

	for (var i = 0; byteOffset + i < buf.length; i++) {
		if (buf[byteOffset + i] === val[match === -1 ? 0 : i - match]) {
			match = match === -1 ? i : match;

			if (i - match + 1 === val.length) {
				return byteOffset + match;
			}
		} else {
			match = -1;
		}
	}

	return -1;
}

module.exports = function (buf, val, byteOffset) {
	if (typeof buf.indexOf === 'function') {
		return buf.indexOf(val, byteOffset);
	}

	if (byteOffset > 0x7fffffff) {
		byteOffset = 0x7fffffff;
	} else if (byteOffset < -0x80000000) {
		byteOffset = -0x80000000;
	}

	byteOffset >>= 0;

	if (buf.length === 0 || byteOffset >= buf.length) {
		return -1;
	}

	if (byteOffset < 0) {
		byteOffset = Math.max(buf.length + byteOffset, 0);
	}

	if (typeof val === 'string') {
		if (val.length === 0) {
			return -1;
		}

		return String.prototype.indexOf.call(buf, val, byteOffset);
	}

	if (Buffer.isBuffer(val)) {
		return indexOf(buf, val, byteOffset);
	}

	if (typeof val === 'number') {
		return Array.prototype.indexOf.call(buf, val, byteOffset);
	}

	throw new TypeError('val must be string, number or Buffer');
};
