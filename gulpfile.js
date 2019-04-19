'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');
var rename = require("gulp-rename");

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', async function () {
    gulp.src('./css/vrum.css')
    .pipe(uglifycss({
        "uglyComments": true
    }))
    .pipe(rename('vrum.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch',function(){
    gulp.watch('./sass/**/*.scss', gulp.series(['sass','minify-css']));
});

gulp.task('default', gulp.series('watch'));