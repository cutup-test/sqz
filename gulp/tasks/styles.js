var gulp = require('gulp'),
  postCSS = require('gulp-postcss'),
  cssImport = require('postcss-import'),
  simpleVars = require('postcss-simple-vars'),
  nestedCss = require('postcss-nested'),
  autoprefixer = require('autoprefixer'),
  hexrgba = require('postcss-hexrgba'),
  mixins = require('postcss-mixins'); 



gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postCSS([cssImport, simpleVars, mixins, nestedCss, hexrgba, autoprefixer]))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles/'));
});



