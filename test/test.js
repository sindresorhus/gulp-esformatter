/* eslint-env mocha */
'use strict';
const path = require('path');
const assert = require('assert');
const Vinyl = require('vinyl');
const esformatter = require('..');

it('should format JS', cb => {
	const stream = esformatter({
		preset: 'jquery'
	});

	stream.once('data', file => {
		assert.equal(file.contents.toString(), 'const foo = [ 1, 2, 3 ]');
	});

	stream.on('end', cb);

	stream.end(new Vinyl({
		contents: Buffer.from('const foo=[1,2,3]')
	}));
});

it('should fetch .esformatter options from path', cb => {
	const stream = esformatter();

	stream.on('data', file => {
		assert.equal(file.contents.toString(), 'const foo = [1,2,3]');
	});

	stream.on('end', cb);

	stream.end(new Vinyl({
		path: path.join(__dirname, 'foo.js'),
		contents: Buffer.from('const foo=[1,2,3]')
	}));
});
