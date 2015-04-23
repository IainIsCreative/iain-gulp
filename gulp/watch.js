var gulp = require('gulp'),
	path = require('path');

gulp.task('watch', function() {
	gulp.watch([
		'styles/*.scss',
		'styles/**.scss',
		], ['styles']
	);
	gulp.watch(
		'scripts/*.js',
		['scripts']
	);
});
