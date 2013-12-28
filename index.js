'use strict';
var es = require('event-stream');
var gutil = require('gulp-util');
var esformatter = require('esformatter');

module.exports = function (options) {
	return es.map(function (file, cb) {
		file.contents = new Buffer(esformatter.format(file.contents.toString(), options));
		cb(null, file);
	});
};
