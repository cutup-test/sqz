var gulp = require('gulp'),
rev = require('gulp-rev'),
uglify = require('gulp-uglify'),
usemin = require('gulp-usemin'),
cleanCss = require('gulp-clean-css'),
del = require('del');


gulp.task('build', ['copyImg'], function() {
  return gulp.src(['./app/*.html'])
  .pipe(usemin({
    css: [cleanCss, rev],
    js: [uglify, rev]
  }))
  .pipe(gulp.dest('docs/'));
});

gulp.task('copyImg', ['delDocs'], function() {
  return gulp.src('./app/assets/images/**')
         .pipe(gulp.dest('./docs/assets/images/'))
})

gulp.task('delDocs', function() {
  return del('./docs');
})