'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var esformatter = require('../index');
var path = require('path');

it('should format JS', function (cb) {
	var stream = esformatter({
		preset: 'jquery'
	});

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), 'var foo = [ 1, 2, 3 ]');
		cb();
	});

	stream.write(new gutil.File({
		contents: new Buffer('var foo=[1,2,3]')
	}));
});

it('should fetch .esformatter options from path', function (cb) {
	var stream = esformatter({
		preset: 'jquery'
	});

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), 'var foo = [ 1,2,3 ]');
		cb();
	});

	stream.write(new gutil.File({
		path: path.join(__dirname, '/foo.js'),
		contents: new Buffer('var foo=[1,2,3]')
	}));
});