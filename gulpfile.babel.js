import gulp from 'gulp';
import requireDir from 'require-dir';

import env from './gulp/config/env';

/**
 * Fetch all the gulp tasks from our `gulp` folder.
 */
requireDir('./gulp/tasks', { recurse: true });

/**
 *
 * Default Gulp Task
 *
 * Runs webpack, styles, and watch as well as all prefined tasks on first run.
 *
 */
gulp.task('default', ['webpack', 'styles', 'watch']);

gulp.task('env', () =>
  console.log(env),
);
