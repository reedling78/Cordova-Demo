
var gulp = require('gulp');
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('bundle-js', function () {
    'use strict';

    return gulp.src('www/js/main.js')

        .pipe(amdOptimize('main', {
            name: "main",
            configFile: "www/js/main.js",
            baseUrl: 'www/js/'
        }))

        .pipe(concat('main.js'))

        .pipe(gulp.dest('www/min'));
});

gulp.task('sass', function () {
    'use strict';
    return gulp.src('www/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('www/min'));
});

gulp.task('default', ['bundle-js']);