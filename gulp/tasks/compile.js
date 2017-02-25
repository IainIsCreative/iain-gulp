import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';

import paths from '../config/paths';

/**
 *
 * Clean JS Task
 *
 * Every time the JS needs compilation, destroy the previously created JS files.
 *
 */
gulp.task('clean-js', () => del([
  paths.js.bundle,
  paths.js.bundleMin,
  `${paths.dirs.lib}/**`,
  // Ignore Gitkeep file
  `!${paths.dirs.lib}`,
  `!${paths.dirs.lib}/.gitkeep`,
]));

/**
 *
 * Compile Task
 *
 * Takes all the JS, runs it through babel and then outputs it to the `lib`
 * directory.
 *
 */
gulp.task('compile', ['eslint', 'clean-js'], () =>
  gulp.src(paths.js.allSrc)
    .pipe(babel())
    .pipe(gulp.dest(paths.dirs.lib)),
);
