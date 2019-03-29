'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('minify-css', function () {
    gulp.src('./src/css/*.css')
    .pipe(uglifycss({
        "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch',function(){
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/css/*.css',gulp.series('minify-css'))
});

gulp.task('default', gulp.series('watch'));