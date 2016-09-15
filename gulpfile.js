'use strict';

const gulp = require('gulp-help')(require('gulp'));
const prettyTypescript = require('pretty-typescript');

gulp.task('prettify', function() {
  gulp.src(['src/**/*.ts', 'src/**/*.tsx'])
    .pipe(prettyTypescript())
    .pipe(gulp.dest('src'));
});
