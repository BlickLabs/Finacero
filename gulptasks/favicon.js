var gulp = require('gulp'),
  paths = require('../gulpconfig').paths,
  argv = require('yargs').argv,
  production = argv.production;

gulp.task('copy:favicons', function () {
  var baseDir = production ? paths.dist : paths.build;

  return gulp.src(paths.src.favicon_folder)
    .pipe(gulp.dest(baseDir.root));
});
