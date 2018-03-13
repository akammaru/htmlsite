var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css')

//single compile run
gulp.task('styles', function() {
    gulp.src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

//watch task
gulp.task('default', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
});

//poduction - minify
gulp.task('production', function () {
    gulp.src('css/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'));
});