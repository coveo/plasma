var config = require('./configuration');

var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass')
var scsslint = require('gulp-scss-lint')
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', 'Compile scss files to dist folder', ['sprites'], function () {
    return gulp.src('./scss/guide.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scss:test', 'Test scss files validity' , function(){
    return gulp.src('./scss/*.scss')
        .pipe( scsslint() )
});
