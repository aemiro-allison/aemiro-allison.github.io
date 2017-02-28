/* eslint-disable */
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('pngquant');

gulp.task('default', function() {
  gulp.src(['assets/images/*'])
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()],
    }))
    .pipe(gulp.dest('assets/images'));
});
