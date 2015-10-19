var config = require('./configuration');

var gulp = require('gulp-help')(require('gulp'));
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var gzip = require('gulp-gzip');
var rename = require('gulp-rename');

var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

var csscomb = require('gulp-csscomb');

var autoprefixerOptions = config.autoprefixerOptions;
var gzipOptions = config.gzipOptions;

var useMinifiedSources = gutil.env.min;
var useGzippedSources = gutil.env.gzip;

gulp.task('less', 'Compile less files to dist folder', ['sprites'], function () {
    return gulp.src('./less/guide.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', function (err) {
            gutil.log(err.message);
        })
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(rename('CoveoStyleGuide.css'))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulpif(useMinifiedSources, minifyCSS({
            keepSpecialComments: 0,
            processImport: false
        })))
        .pipe(gulpif(useGzippedSources, gzip(gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.min.css')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('./dist/css')));
});

gulp.task('less:docs', 'Build less and copy it to /docs/dist', ['less'], function () {
    gulp.src('./dist/css/*').pipe(gulp.dest('./dist/css')).pipe(gulp.dest('./_gh_pages/dist/css'));
});


gulp.task('less:format', function() {
    return gulp.src('./less/**/*.less')
        .pipe(csscomb())
        .pipe(gulp.dest('./less'));
});
