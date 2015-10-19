var config = require('./configuration');

var gulp = require('gulp-help')(require('gulp'));
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var gzip = require('gulp-gzip');
var rename = require('gulp-rename');

var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

var csscomb = require('gulp-csscomb');

var autoprefixerOptions = config.autoprefixerOptions;
var gzipOptions = config.gzipOptions;

var useMinifiedSources = gutil.env.min;
var useGzippedSources = gutil.env.gzip;

gulp.task('sass', 'Compile sass files to dist folder', ['sprites'], function () {
    return gulp.src('./scss/guide.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
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

gulp.task('sass:docs', 'Build less and copy it to /docs/dist', ['sass'], function () {
    gulp.src('./dist/css/*').pipe(gulp.dest('./dist/css')).pipe(gulp.dest('./_gh_pages/dist/css'));
});


gulp.task('sass:format', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(csscomb())
        .pipe(gulp.dest('./scss'));
});
