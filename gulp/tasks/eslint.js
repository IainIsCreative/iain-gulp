import gulp from 'gulp';
import eslint from 'gulp-eslint';
import flow from 'gulp-flowtype';

import paths from '../config/paths';

/**
 *
 * esLint Task
 *
 * Runs a test for linting and type checking in all JS files before running any
 * tasks to check if the source code meets requirements.
 * Stops all tasks if the linter finds any errors.
 *
 */
gulp.task('eslint', () =>
  gulp.src([
    paths.js.allSrc,
    paths.gulp.main,
    paths.gulp.dir,
    paths.webpack,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(flow({ abort: true })),
);
