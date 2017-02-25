import gulp from 'gulp';
import eslint from 'gulp-eslint';
import flow from 'gulp-flowtype';

import paths from '../config/paths';

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
