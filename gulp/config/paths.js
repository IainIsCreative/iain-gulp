const paths = {

  js: {
    allSrc: 'src/js/**/*.js',
    entryPoint: 'src/js/app.js',
    bundle: 'dist/bundle.js?(.map)',
    bundleMin: 'dist/bundle.min.js?(.map)',
  },

  css: {
    allSrc: 'src/styles/**/*.scss',
    bundle: 'dist/style.css?(.map)',
    bundleMin: 'dist/style.min.css?(.map)',
    productionFile: 'style.min.css', //For renaming
  },

  gulp: {
    main: 'gulpfile.babel.js',
    dir: 'gulp/**/*.js',
  },

  webpack: 'webpack/*.js',

  dirs: {
    lib: 'lib',
    dist: 'dist',
  },

};

export default paths;
