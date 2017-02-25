import gulp from 'gulp';

/**
 *
 * Clean Task
 *
 * Simple wrapper for all clean tasks (JS, CSS).
 * Deletes all files in the output directory.
 *
 */
gulp.task('clean', ['clean-styles', 'clean-js']);
