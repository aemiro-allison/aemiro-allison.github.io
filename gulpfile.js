/* eslint-disable */
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', function() {
  gulp.src(['assets/images/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('assets/images'));
});
