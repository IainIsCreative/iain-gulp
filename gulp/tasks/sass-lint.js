import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';

import paths from '../config/paths';

/**
 *
 * Sass Lint Task
 *
 * Runs a linter in all SCSS fails before any SCSS files are compiled.
 * Stops all tasks if it finds any errors.
 *
 */
gulp.task('sass-lint', () =>
  gulp.src(paths.css.allSrc)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError()),
);
