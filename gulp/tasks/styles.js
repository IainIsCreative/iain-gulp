import gulp from 'gulp';
import gutil from 'gulp-util';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';

import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

import paths from '../config/paths';
import env from '../config/env';
import browserList from '../config/browsers';

let removeComments;
let nanoCore = true;

if (env === 'production') {
  removeComments = {
    removeAll: true,
  };
} else {
  nanoCore = false;
  removeComments = false;
}

/**
 *
 * Processes Array
 *
 * An array containing our PostCSS plugins and the settings for each plugin.
 * Output differentiates depending on the environment we're using.
 *
 */
const processes = [
  cssnano({
    autoprefixer: false,
    /**
     *
     * Depending on the environment set, only use minification and comments
     * discards in production.
     *
     */
    core: nanoCore,
    discardComments: removeComments,
  }),
  cssnext({
    options: {
      browsers: browserList,
    },
  }),
];

/**
 *
 * Clean Styles Task
 *
 * Destroys all CSS files and maps in the output directory.
 * Used as a predefined task for the main styles function.
 *
 */
gulp.task('clean-styles', () => del([
  paths.css.bundle,
  paths.css.bundleMin,
]));

/**
 *
 * Styles Task
 *
 * Takes all our Sass files, compiles, and then runs through PostCSS to give
 * our CSS output, and a CSS Source Map.
 *
 * Depending on the environment, the file may be renamed.
 *
 */
gulp.task('styles', ['sass-lint', 'clean-styles'], () =>
  gulp.src(paths.css.allSrc)
    .pipe(sourcemaps.init())
    .pipe(sass({
      precision: 9,
    }).on('error', sass.logError))
    .pipe(postcss(processes))
    /**
     * If the environment is set to production, rename the file.
     * Otherwise, continue as normal.
     */
    .pipe(env === 'production' ? rename(paths.css.productionFile) : gutil.noop())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dirs.dist))
    .pipe(notify({
      message: 'Styles Completed!',
      onLast: true,
    })),
);
