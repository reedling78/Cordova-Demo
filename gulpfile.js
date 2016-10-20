
var gulp = require('gulp'),
    amdOptimize = require('amd-optimize'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    cordova = require("cordova-lib").cordova;

gulp.task('webserver', function () {
    'use strict';
    connect.server({
        root: 'www'
    });
});

gulp.task("cordova-build", function (callback) {
    'use strict';
    cordova.build({
        "platforms": ["android", "ios"],
        "options": {
            argv: ["--release", "--gradleArg=--no-daemon"]
        }
    }, callback);
});

gulp.task("cordova-run", function (callback) {
    'use strict';
    cordova.run({
        "platforms": ["ios"]
    }, callback);
});

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

gulp.task('bundle-scss', function () {
    'use strict';
    return gulp.src('www/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('www/min'));
});


gulp.task('watch', function () {
    'use strict';
    gulp.watch('www/scss/*.scss', ['bundle-scss']);
});

gulp.task('dev-ios', [
    'bundle-js',
    'bundle-scss',
    'cordova-run',
    'watch'
]);


gulp.task('dev-web', [
    'bundle-js',
    'bundle-scss',
    'webserver',
    'watch'
]);