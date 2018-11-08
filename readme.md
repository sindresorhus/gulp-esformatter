# Deprecated

The `esformatter` project is no longer maintained.

---

# gulp-esformatter [![Build Status](https://travis-ci.org/sindresorhus/gulp-esformatter.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-esformatter)

> Beautify JavaScript code with [esformatter](https://github.com/millermedeiros/esformatter)

*Issues with the output should be reported on the esformatter [issue tracker](https://github.com/millermedeiros/esformatter/issues).*


## Install

```
$ npm install --save-dev gulp-esformatter
```


## Usage

```js
const gulp = require('gulp');
const esformatter = require('gulp-esformatter');

gulp.task('default', () =>
	gulp.src('src/app.js')
		.pipe(esformatter({indent: {value: '  '}}))
		.pipe(gulp.dest('dist'))
);
```


## API

### esformatter(options)

See the esformatter [options](https://github.com/millermedeiros/esformatter#esformatterformatstr-optsstring).

Options are passed to [`esformatter.rc()`](https://github.com/millermedeiros/esformatter#esformatterrcfilepath-customoptionsobject).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
