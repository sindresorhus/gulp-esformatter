'use strict';
const through = require('through2');
const esformatter = require('esformatter');
const PluginError = require('plugin-error');

module.exports = options => {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-esformatter', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(esformatter.format(file.contents.toString(), esformatter.rc(file.path, options)));
			this.push(file);
		} catch (err) {
			this.emit('error', new PluginError('gulp-esformatter', err, {fileName: file.path}));
		}

		cb();
	});
};
