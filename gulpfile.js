
var gulp = require('gulp');
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');

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

gulp.task('default', ['bundle-js']);