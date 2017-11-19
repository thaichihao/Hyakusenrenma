var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
  return gulp.src('assets/sass/index.sass')
  .pipe(sass())
  .pipe(gulp.dest('dist/css/'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
      browserSync.init({
          server: "./"
      });
  
      gulp.watch("assets/sass/*.sass", ['sass']);
      gulp.watch("./*.html").on('change', browserSync.reload);
  });

gulp.task('default',['serve']);