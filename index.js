'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var esformatter = require('esformatter');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-esformatter', 'Streaming not supported'));
			return cb();
		}

		try {
			file.contents = new Buffer(esformatter.format(file.contents.toString(), options));
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-esformatter', err));
		}

		this.push(file);
		cb();
	});
};
