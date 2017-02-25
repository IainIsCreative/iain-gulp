import gulp from 'gulp';

import paths from '../config/paths';

/**
 *
 * Watch Task
 *
 * Using our JS and CSS sources, watch for changes in those files and run the
 * respective task for the files changed.
 *
 * - Webpack for JS changes
 * - Styles for CSS changes
 *
 */
gulp.task('watch', () => {
  gulp.watch(paths.js.allSrc, ['webpack']);
  gulp.watch(paths.css.allSrc, ['styles']);
});
