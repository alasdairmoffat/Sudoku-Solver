// Sass configuration
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', (cb) => {
  gulp
    .src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', (cb) => {
    gulp.watch('./src/scss/*.scss', gulp.series('sass'));
    cb();
  }),
);
