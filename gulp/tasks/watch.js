var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('default', function () {
  gulp.start('serve')
});

gulp.task('serve', function () {
  gulp.start('watch');
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
});

gulp.task('watch', function () {
  watch('./app/*.html', function () {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function () {
    return gulp.start('cssInject');
  });

  watch('./app/assets/**/*.js', function () {
    return gulp.start('scriptsRefresh')
  });
});

gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
  browserSync.reload();
});