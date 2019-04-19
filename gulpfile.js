'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');
var rename = require("gulp-rename");

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('minify-css', async function () {
    gulp.src('./src/css/*.css')
    .pipe(uglifycss({
        "uglyComments": true
    }))
    .pipe(rename('vrum.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch',function(){
    gulp.watch('./src/sass/**/*.scss', gulp.series(['sass','minify-css']));
});

gulp.task('default', gulp.series('watch'));