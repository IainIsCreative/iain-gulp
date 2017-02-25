import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';

import paths from '../config/paths';

gulp.task('sass-lint', () =>
  gulp.src(paths.css.allSrc)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError()),
);
