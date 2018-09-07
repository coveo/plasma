const config = require('./configuration');

const gulp = require('gulp-help')(require('gulp'));
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const gzip = require('gulp-gzip');
const rename = require('gulp-rename');

const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

const csscomb = require('gulp-csscomb');

const autoprefixerOptions = config.autoprefixerOptions;
const gzipOptions = config.gzipOptions;

const useMinifiedSources = gutil.env.min;
const useGzippedSources = gutil.env.gzip;

gulp.task('sass', 'Compile sass files to dist folder', ['palette', 'sprites'], (done) => {
    return gulp.src('./scss/guide.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', (err) => {
            sassError(err, done);
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(rename('CoveoStyleGuide.css'))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulpif(useMinifiedSources, minifyCSS({
            keepSpecialComments: 0,
            processImport: false,
        })))
        .pipe(gulpif(useGzippedSources, gzip(gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.min.css')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('./dist/css')));
});

gulp.task('sass:format', () => {
    return gulp.src([
        './scss/**/*.scss',
        '!./scss/icons/svgs.scss',
        '!./scss/utility/colors.scss',
        '!./scss/utility/border.scss',
        '!./scss/utility/default-white-space.scss',
        '!./scss/helpers.scss',
        '!./scss/sprites.scss',
    ])
        .pipe(csscomb())
        .pipe(gulp.dest('./scss'));
});

function sassError(err, doneCallback) {
    process.stderr.write(new gutil.PluginError('sass', err.messageFormatted).toString() + '\n');
    doneCallback(1);
}
