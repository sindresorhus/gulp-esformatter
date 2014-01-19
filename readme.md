# [gulp](https://github.com/wearefractal/gulp)-esformatter [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-esformatter.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-esformatter)

> Beautify JavaScript code with [esformatter](https://github.com/millermedeiros/esformatter)

*Issues with the output should be reported on the esformatter [issue tracker](https://github.com/millermedeiros/esformatter/issues).*


## Install

Install with [npm](https://npmjs.org/package/gulp-esformatter)

```
npm install --save-dev gulp-esformatter
```


## Example

```js
var gulp = require('gulp');
var esformatter = require('gulp-esformatter');

gulp.task('default', function () {
	gulp.src('src/app.js')
		.pipe(esformatter({indent: {value: '  '}}))
		.pipe(gulp.dest('dist'));
});
```


## API

### esformatter(options)

See the esformatter [options](https://github.com/millermedeiros/esformatter#esformatterformatstr-optsstring).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
