import gulp from 'gulp';
import notify from 'gulp-notify';

import webpack from 'webpack-stream';
import webpackConfig from '../../webpack/webpack.config.babel';
import webpackProductionConfig from '../../webpack/webpack.config.production';

import paths from '../config/paths';
import env from '../config/env';

gulp.task('webpack', ['compile'], () =>
  gulp.src(paths.js.entryPoint)
    .pipe(webpack(env === 'production' ? webpackProductionConfig : webpackConfig))
    .pipe(gulp.dest(paths.dirs.dist))
    .pipe(notify({
      message: 'Bundle Completed!',
      onLast: true,
    })),
);
