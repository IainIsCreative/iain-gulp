'use strict';

var gulp = require('gulp'),
	requireDir = require('require-dir');

requireDir('./gulp', {recurse: true});

gulp.task('default', ['styles', 'scripts', 'copysvg'], function() {

});
