var gulp = require('gulp'),
	path = require('path'),
	$ = require('gulp-load-plugins')();

gulp.task('styles', function() {
	return gulp.src([
			'styles/*.scss',
			]
		)
		.pipe($.sass())
		.pipe($.autoprefixer())
		.on('error', $.notify.onError())
		.on('error', function(err) {
			console.log('Error:', err);
		})
		.pipe(gulp.dest('dist/styles/'))
		.pipe($.notify('Completed Styles!'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'scripts/*.js'
	], {read: false})
		.pipe($.browserify({
			insertGlobals: false,
			transform: ['debowerify']
		}))
		.on('error', $.notify.onError())
		.on('error', function(err) {
			console.log('Error:', err);
		})
		.pipe(gulp.dest('dist/scripts'))
		.pipe($.notify('Completed Scripts!'));
});

gulp.task('copysvg', function() {
	return gulp.src('svg/*.svg')
		.pipe(gulp.dest('dist/svg/'));
});


gulp.task('build', ['styles', 'scripts', 'copysvg']);
